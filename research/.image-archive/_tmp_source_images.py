#!/usr/bin/env python3
"""Image source script for Northside Fade Co.

Queries Pixabay (primary) + Pexels (fallback) per image-search skill policy.
Validates every URL with HEAD before download. Saves into research/images/.
"""
import os, json, sys, urllib.request, urllib.parse, urllib.error, ssl, re, time, hashlib
from pathlib import Path

WS = Path("/opt/data/hermes-orchestrator/northside-fade-co/research")
IMG_DIR = WS / "images"
IMG_DIR.mkdir(parents=True, exist_ok=True)

PIXABAY_KEY = open("/opt/data/keys/image-search/pixabay").read().strip()
PEXELS_KEY = open("/opt/data/keys/image-search/pexels").read().strip()
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
CTX = ssl.create_default_context()

# Slot definitions: slot -> list of search queries (try in order)
SLOTS = {
    "hero": ["modern barbershop interior", "barber working chair", "barbershop tools"],
    "services-fade": ["fade haircut fade", "skin fade haircut", "barber fade clipper"],
    "services-taper": ["taper haircut", "taper fade", "barber taper line up"],
    "services-beard": ["beard trim barber", "hot towel shave barber", "beard grooming"],
    "about-shop": ["modern minimalist barbershop", "barbershop interior minimal", "barber shop chair"],
    "about-barber": ["barber portrait", "barber professional", "barber apron"],
    "about-detail": ["barber tools scissors", "barber clippers comb", "barber straight razor"],
    "gallery-1": ["modern haircut style", "men fade haircut", "barber finished cut"],
    "gallery-2": ["hot towel shave close up", "straight razor shave", "barber shaving"],
    "gallery-3": ["barbershop waiting area", "barbershop atmosphere", "barbershop leather chair"],
}

def http_get_json(url, headers=None):
    req = urllib.request.Request(url, headers={"User-Agent": UA, **(headers or {})})
    with urllib.request.urlopen(req, context=CTX, timeout=20) as r:
        return json.loads(r.read())

def http_head_ok(url):
    """HEAD-check that URL returns 200 and is an image."""
    try:
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": UA})
        with urllib.request.urlopen(req, context=CTX, timeout=15) as r:
            if r.status != 200: return False, f"status {r.status}"
            ct = (r.headers.get("Content-Type") or "").lower()
            if not (ct.startswith("image/") or any(url.lower().endswith(ext) for ext in [".jpg",".jpeg",".png",".webp"])):
                return False, f"content-type={ct}"
            return True, "ok"
    except Exception as e:
        return False, str(e)

def pixabay_search(query, per_page=10):
    """Returns list of {'url','thumb','width','height','tags'}."""
    url = f"https://pixabay.com/api/?key={PIXABAY_KEY}&q={urllib.parse.quote(query)}&image_type=photo&per_page={per_page}&safesearch=true&category=&min_width=1200"
    try:
        data = http_get_json(url)
    except Exception as e:
        return [{"error": f"pixabay_http:{e}"}]
    hits = data.get("hits", [])
    out = []
    for h in hits:
        out.append({
            "src": "pixabay",
            "page_url": h.get("pageURL",""),
            "download_url": h.get("fullHDURL") or h.get("largeImageURL") or h.get("webformatURL"),
            "preview": h.get("previewURL"),
            "width": h.get("imageWidth"),
            "height": h.get("imageHeight"),
            "tags": h.get("tags",""),
            "id": h.get("id"),
        })
    return out

def pexels_search(query, per_page=10):
    """Returns list of {'url','thumb','width','height','alt'}."""
    url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(query)}&per_page={per_page}"
    try:
        data = http_get_json(url, headers={"Authorization": PEXELS_KEY})
    except Exception as e:
        return [{"error": f"pexels_http:{e}"}]
    photos = data.get("photos", [])
    out = []
    for p in photos:
        src = p.get("src", {})
        out.append({
            "src": "pexels",
            "page_url": p.get("url",""),
            "download_url": src.get("original") or src.get("large2x") or src.get("large") or src.get("medium"),
            "preview": src.get("tiny") or src.get("small"),
            "width": p.get("width"),
            "height": p.get("height"),
            "alt": p.get("alt",""),
            "id": p.get("id"),
            "photographer": p.get("photographer",""),
        })
    return out

def download(url, dest):
    """Download with User-Agent. Returns bytes downloaded."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        data = r.read()
    with open(dest, "wb") as f:
        f.write(data)
    return len(data)

def is_blacklisted_phrase(text):
    """Reject images with NSFW/off-topic tags."""
    bad = {"sexy","nude","nsfw","porn","lingerie","bikini","body","sensual","erotic","adult","threesome","sex","hot woman","attractive woman","babe","hunk"}
    t = text.lower()
    return any(b in t for b in bad)

def is_barbershop_relevant(tags_text):
    """Accept only barbershop-relevant tags."""
    good_any = ("barber","barbershop","fade","taper","haircut","razor","beard","clippers","shave","stylist","comb","scissors","grooming","chair","salon","trim")
    t = tags_text.lower()
    has_good = any(g in t for g in good_any)
    return has_good

# Image quality filter: prefer landscape, min 1200 wide, portrait or landscape
def passes_quality(meta):
    w = meta.get("width") or 0
    h = meta.get("height") or 0
    if w < 1200: return False
    return True

manifest = []

for slot, queries in SLOTS.items():
    print(f"\n=== SLOT {slot} ===")
    found = False
    tried_sources = []

    # Try Pixabay primary
    for q in queries:
        if found: break
        tried_sources.append(f"pixabay:{q}")
        results = pixabay_search(q, per_page=15)
        if not results or (len(results)==1 and "error" in results[0]):
            print(f"  pixabay err: {results}")
            continue
        for cand in results:
            tags = cand.get("tags","") + " " + (cand.get("alt") or "")
            if is_blacklisted_phrase(tags): continue
            if not is_barbershop_relevant(tags): continue
            if not passes_quality(cand): continue
            dl = cand["download_url"]
            ok, why = http_head_ok(dl)
            if not ok:
                print(f"  head-fail {dl} -> {why}")
                continue
            ext = ".jpg"
            for e in [".png",".webp",".jpeg"]:
                if dl.lower().endswith(e): ext = e
            dest = IMG_DIR / f"{slot}{ext}"
            try:
                size = download(dl, dest)
            except Exception as e:
                print(f"  dl-fail {dl} -> {e}")
                continue
            if size < 5000:
                dest.unlink(missing_ok=True)
                continue
            # Verify it's a real image
            with open(dest,"rb") as f:
                head = f.read(8)
            if not (head.startswith(b"\xff\xd8") or head.startswith(b"\x89PNG") or head[:4]==b"RIFF"):
                dest.unlink(missing_ok=True)
                continue
            print(f"  PIXABAY OK {slot} {dest.name} {size}b {dl}")
            manifest.append({
                "slot": slot,
                "local_path": str(dest),
                "source": "pixabay",
                "source_url": dl,
                "page_url": cand.get("page_url",""),
                "width": cand.get("width"),
                "height": cand.get("height"),
                "tags": cand.get("tags",""),
                "size_bytes": size,
                "queries_tried": tried_sources,
            })
            found = True
            break

    # Pexels fallback
    if not found:
        for q in queries:
            if found: break
            tried_sources.append(f"pexels:{q}")
            results = pexels_search(q, per_page=15)
            if not results or (len(results)==1 and "error" in results[0]):
                print(f"  pexels err: {results}")
                continue
            for cand in results:
                tags = cand.get("alt","") + " " + (cand.get("page_url","") or "")
                if is_blacklisted_phrase(tags): continue
                if not is_barbershop_relevant(tags): continue
                if not passes_quality(cand): continue
                dl = cand["download_url"]
                ok, why = http_head_ok(dl)
                if not ok:
                    print(f"  head-fail {dl} -> {why}")
                    continue
                ext = ".jpg"
                for e in [".png",".webp",".jpeg"]:
                    if dl.lower().endswith(e): ext = e
                dest = IMG_DIR / f"{slot}{ext}"
                try:
                    size = download(dl, dest)
                except Exception as e:
                    print(f"  dl-fail {dl} -> {e}")
                    continue
                if size < 5000:
                    dest.unlink(missing_ok=True)
                    continue
                with open(dest,"rb") as f:
                    head = f.read(8)
                if not (head.startswith(b"\xff\xd8") or head.startswith(b"\x89PNG") or head[:4]==b"RIFF"):
                    dest.unlink(missing_ok=True)
                    continue
                print(f"  PEXELS OK {slot} {dest.name} {size}b {dl}")
                manifest.append({
                    "slot": slot,
                    "local_path": str(dest),
                    "source": "pexels",
                    "source_url": dl,
                    "page_url": cand.get("page_url",""),
                    "width": cand.get("width"),
                    "height": cand.get("height"),
                    "alt": cand.get("alt",""),
                    "photographer": cand.get("photographer",""),
                    "size_bytes": size,
                    "queries_tried": tried_sources,
                })
                found = True
                break

    if not found:
        print(f"  *** UNFILLED: {slot} ***")

# Save manifest
(WS / "IMAGE_MANIFEST.json").write_text(json.dumps(manifest, indent=2))
print(f"\nWrote {len(manifest)} image entries to IMAGE_MANIFEST.json")
print(f"Files on disk:")
for f in sorted(IMG_DIR.glob("*")):
    print(f"  {f.name} {f.stat().st_size}b")