#!/usr/bin/env python3
"""Browse Pexels for a clean barber portrait."""
import json, urllib.request, urllib.parse, ssl
from pathlib import Path

PEXELS_KEY = open("/opt/data/keys/image-search/pexels").read().strip()
UA = "Mozilla/5.0"
CTX = ssl.create_default_context()

for q in ["barber selfie", "barber professional", "barber working", "barber shop owner", "barber looking at camera"]:
    url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(q)}&per_page=15"
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Authorization": PEXELS_KEY})
    with urllib.request.urlopen(req, context=CTX, timeout=20) as r:
        data = json.loads(r.read())
    print(f"\n{q}: {len(data.get('photos',[]))} hits")
    for p in data.get("photos", [])[:6]:
        print(f"  id={p['id']} w={p['width']} alt={p.get('alt','')[:90]}")