#!/usr/bin/env python3
"""Try specific Pexels photo ID 8552627 (confident barber in apron in modern salon)."""
import urllib.request, ssl
from pathlib import Path

WS = Path("/opt/data/hermes-orchestrator/northside-fade-co/research")
IMG_DIR = WS / "images"
PEXELS_KEY = open("/opt/data/keys/image-search/pexels").read().strip()
UA = "Mozilla/5.0"
CTX = ssl.create_default_context()

# Direct image URLs for the candidates
candidates = [
    (8552627, "pexels-8552627"),   # Confident barber in apron, modern salon, tattoos
    (19225142, "pexels-19225142"), # Barber poses beside chair in modern shop interior
    (11396207, "pexels-11396207"), # Man capturing mirror selfie in modern barbershop
    (8468137, "pexels-8468137"),   # Male hairdresser wearing gloves and apron, holding hairstyling tools indoors
    (18483772, "pexels-18483772"), # Smiling barber in stylish shop
]

for pid, label in candidates:
    try:
        # Get photo metadata
        url = f"https://api.pexels.com/v1/photos/{pid}"
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Authorization": PEXELS_KEY})
        with urllib.request.urlopen(req, context=CTX, timeout=20) as r:
            data = json.loads(r.read()) if 'json' in dir() else None
        # Actually we just need the image URL. The src is available from search; for direct ID we can construct:
        src_url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=2000"
        req = urllib.request.Request(src_url, method="HEAD", headers={"User-Agent": UA})
        with urllib.request.urlopen(req, context=CTX, timeout=15) as r:
            if r.status == 200:
                print(f"{label} ({pid}): OK")
            else:
                print(f"{label}: status {r.status}")
    except Exception as e:
        print(f"{label}: {e}")

# Download the most promising one as a test
import json
for pid, label in candidates[:1]:
    src_url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=2000"
    req = urllib.request.Request(src_url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        data = r.read()
    dest = IMG_DIR / "about-barber_test.jpg"
    with open(dest, "wb") as f:
        f.write(data)
    print(f"downloaded {dest.name} {len(data)}b")