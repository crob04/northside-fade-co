#!/usr/bin/env python3
"""Re-source problem slots. Only downloads the new image; renames old to .bak."""
import os, json, urllib.request, urllib.parse, ssl
from pathlib import Path

WS = Path("/opt/data/hermes-orchestrator/northside-fade-co/research")
IMG_DIR = WS / "images"
IMG_DIR.mkdir(parents=True, exist_ok=True)

PIXABAY_KEY = open("/opt/data/keys/image-search/pixabay").read().strip()
PEXELS_KEY = open("/opt/data/keys/image-search/pexels").read().strip()
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
CTX = ssl.create_default_context()

# Problem slots: tighter, more specific queries
SLOTS = {
    "services-taper": ["taper haircut fade", "tapered haircut men", "low taper fade", "taper lineup haircut"],
    "gallery-3": ["barbershop interior barber chair", "modern barbershop chair interior", "barbershop leather seat", "vintage barber chair"],
    "about-barber": ["barber scissors hand portrait", "barber holding scissors", "barber close up tools"],
    "about-detail": ["barber comb clippers flat lay", "barber tools flatlay", "professional barber scissors clippers"],
    "gallery-1": ["skin fade haircut style", "modern fade hairstyle finished", "mens fade haircut styled"],
}

def http_get_json(url, headers=None):
    req = urllib.request.Request(url, headers={"User-Agent": UA, **(headers or {})})
    with urllib.request.urlopen(req, context=CTX, timeout=20) as r:
        return json.loads(r.read())

def http_head_ok(url):
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

def pixabay_search(query, per_page=15):
    url = f"https://pixabay.com/api/?key={PIXABAY_KEY}&q={urllib.parse.quote(query)}&image_type=photo&per_page={per_page}&safesearch=true&min_width=1200"
    try:
        data = http_get_json(url)
    except Exception as e:
        return [{"error": f"pixabay_http:{e}"}]
    out = []
    for h in data.get("hits", []):
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

def pexels_search(query, per_page=15):
    url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(query)}&per_page={per_page}"
    try:
        data = http_get_json(url, headers={"Authorization": PEXELS_KEY})
    except Exception as e:
        return [{"error": f"pexels_http:{e}"}]
    out = []
    for p in data.get("photos", []):
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
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        data = r.read()
    with open(dest, "wb") as f:
        f.write(data)
    return len(data)

def is_blacklisted(text):
    bad = ("sexy","nude","nsfw","porn","lingerie","bikini","body","sensual","erotic","adult","threesome","sex","babe","viking","figurine","souvenir","miniature","wooden","toy","ornament","craft")
    t = text.lower()
    return any(b in t for b in bad)

def is_barbershop_relevant(tags_text):
    good = ("barber","barbershop","fade","taper","haircut","razor","beard","clippers","shave","stylist","comb","scissors","grooming","salon","trim","hair","mens haircut","fade haircut","taper fade","hair styling","barber chair","barbershop interior","barber tools","flat lay")
    t = tags_text.lower()
    return any(g in t for g in good)

def passes_quality(meta):
    w = meta.get("width") or 0
    return w >= 1200

for slot, queries in SLOTS.items():
    print(f"\n=== RESLOT {slot} ===")
    found = False
    candidates_tried = []

    for source_name, search_fn, dl_ext in [("pixabay", pixabay_search, ".jpg"), ("pexels", pexels_search, ".jpg")]:
        if found: break
        for q in queries:
            if found: break
            candidates_tried.append(f"{source_name}:{q}")
            results = search_fn(q, per_page=20)
            if not results or (len(results)==1 and "error" in results[0]):
                print(f"  {source_name} err: {results}")
                continue
            for cand in results:
                tags = (cand.get("tags","") or "") + " " + (cand.get("alt","") or "") + " " + (cand.get("page_url","") or "")
                if is_blacklisted(tags): continue
                if not is_barbershop_relevant(tags): continue
                if not passes_quality(cand): continue
                dl = cand["download_url"]
                ok, why = http_head_ok(dl)
                if not ok:
                    continue
                dest = IMG_DIR / f"{slot}_new{dl_ext}"
                try:
                    size = download(dl, dest)
                except Exception as e:
                    continue
                if size < 8000:
                    dest.unlink(missing_ok=True)
                    continue
                with open(dest,"rb") as f:
                    head = f.read(8)
                if not (head.startswith(b"\xff\xd8") or head.startswith(b"\x89PNG") or head[:4]==b"RIFF"):
                    dest.unlink(missing_ok=True)
                    continue
                print(f"  {source_name.upper()} {slot} -> {dest.name} {size}b  {dl[:80]}")
                print(f"    tags/alt: {tags[:200]}")
                found = True
                break

    if found:
        old = IMG_DIR / f"{slot}.jpg"
        if old.exists():
            old.rename(IMG_DIR / f"{slot}_old.jpg")
        (IMG_DIR / f"{slot}_new.jpg").rename(IMG_DIR / f"{slot}.jpg")
        print(f"  SWAPPED {slot}")
    else:
        print(f"  *** STILL UNFILLED: {slot} ***")