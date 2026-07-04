#!/usr/bin/env python3
"""Final reslot pass. Pexels-first for taper and fade (Pixabay returns noise)."""
import os, json, urllib.request, urllib.parse, ssl
from pathlib import Path

WS = Path("/opt/data/hermes-orchestrator/northside-fade-co/research")
IMG_DIR = WS / "images"

PIXABAY_KEY = open("/opt/data/keys/image-search/pixabay").read().strip()
PEXELS_KEY = open("/opt/data/keys/image-search/pexels").read().strip()
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
CTX = ssl.create_default_context()

SLOTS = {
    "services-taper": ["taper fade", "low taper", "high taper fade", "tapered haircut black man"],
    "gallery-1": ["men's fade haircut", "fade haircut style", "skin fade haircut", "fade hairstyle"],
    "about-barber": ["barber portrait man", "barber holding clippers", "barber smiling portrait"],
}

def http_get_json(url, headers=None):
    req = urllib.request.Request(url, headers={"User-Agent": UA, **(headers or {})})
    with urllib.request.urlopen(req, context=CTX, timeout=20) as r:
        return json.loads(r.read())

def http_head_ok(url):
    try:
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": UA})
        with urllib.request.urlopen(req, context=CTX, timeout=15) as r:
            if r.status != 200: return False
            ct = (r.headers.get("Content-Type") or "").lower()
            return ct.startswith("image/") or any(url.lower().endswith(e) for e in [".jpg",".jpeg",".png",".webp"])
    except Exception:
        return False

def pixabay_search(query, per_page=20):
    url = f"https://pixabay.com/api/?key={PIXABAY_KEY}&q={urllib.parse.quote(query)}&image_type=photo&per_page={per_page}&safesearch=true&min_width=1200"
    try:
        data = http_get_json(url)
    except Exception:
        return []
    out = []
    for h in data.get("hits", []):
        out.append({
            "src": "pixabay",
            "page_url": h.get("pageURL",""),
            "download_url": h.get("fullHDURL") or h.get("largeImageURL") or h.get("webformatURL"),
            "tags": h.get("tags",""),
            "width": h.get("imageWidth"),
            "id": h.get("id"),
        })
    return out

def pexels_search(query, per_page=20, orientation=None):
    url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(query)}&per_page={per_page}"
    if orientation: url += f"&orientation={orientation}"
    try:
        data = http_get_json(url, headers={"Authorization": PEXELS_KEY})
    except Exception:
        return []
    out = []
    for p in data.get("photos", []):
        src = p.get("src", {})
        out.append({
            "src": "pexels",
            "page_url": p.get("url",""),
            "download_url": src.get("original") or src.get("large2x") or src.get("large") or src.get("medium"),
            "alt": p.get("alt",""),
            "width": p.get("width"),
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
    bad = ("sexy","nude","nsfw","porn","lingerie","bikini","body","sensual","erotic","adult","threesome","sex","babe","viking","figurine","souvenir","miniature","wooden","toy","ornament","craft","woman","women","female","lady","girl","senior","elderly","pixie","lipstick","braid","ponytail","saree","dress","necklace","skirt")
    t = text.lower()
    return any(b in t for b in bad)

def is_barbershop_relevant(tags_text):
    good = ("barber","barbershop","fade","taper","haircut","razor","beard","clippers","shave","stylist","comb","scissors","grooming","salon","trim","hair","hair styling","haircut barbershop","barber shop","barbershop haircut","barbershop fade")
    t = tags_text.lower()
    return any(g in t for g in good)

def passes_quality(meta):
    return (meta.get("width") or 0) >= 1200

for slot, queries in SLOTS.items():
    print(f"\n=== RESLOT {slot} ===")
    found = False
    for source_name, search_fn in [("pexels", pexels_search), ("pixabay", pixabay_search)]:
        if found: break
        for q in queries:
            if found: break
            results = search_fn(q, per_page=30)
            if not results:
                continue
            print(f"  {source_name} '{q}' -> {len(results)} candidates")
            for cand in results:
                tags = (cand.get("tags","") or "") + " " + (cand.get("alt","") or "")
                if is_blacklisted(tags): continue
                # For taper / fade / gallery-1 slots, MUST be barbershop-relevant
                if slot in ("services-taper", "gallery-1"):
                    if not is_barbershop_relevant(tags): continue
                dl = cand["download_url"]
                if not http_head_ok(dl): continue
                dest = IMG_DIR / f"{slot}_new.jpg"
                try:
                    size = download(dl, dest)
                except Exception:
                    continue
                if size < 8000:
                    dest.unlink(missing_ok=True)
                    continue
                with open(dest,"rb") as f:
                    head = f.read(8)
                if not (head.startswith(b"\xff\xd8") or head.startswith(b"\x89PNG") or head[:4]==b"RIFF"):
                    dest.unlink(missing_ok=True)
                    continue
                print(f"  {source_name.upper()} {slot} {dest.name} {size}b {dl[:80]}")
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