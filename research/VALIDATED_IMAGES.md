# VALIDATED_IMAGES.md — Image Manifest

> 10 stock images sourced from Pixabay + Pexels for the Northside Fade Co.
> build. All images downloaded locally — no hotlinks. Verified 200 OK on
> every source URL. Every image visually inspected and tagged for content
> relevance. Operator did not supply any source photos (FACTS.json Q11).

## Preflight

Image APIs preflighted at `/opt/data/scripts/preflight-images.sh` —
verdict **both_ok** (Pixabay + Pexels both returned 200 with hit count > 0).
Audit file: `research/.image-preflight.json`.

Per the operator policy:
- ✅ Pixabay (primary)
- ✅ Pexels (fallback)
- ❌ Unsplash — banned by policy (bypasses image-search skill, hotlinks in production).

## Slot plan → final assignment

The site needs 10 images for 5 pages:

| Page | Slot | File | Theme |
|---|---|---|---|
| Home | hero | `hero.jpg` | Barber at work, action shot |
| Services | services-fade | `services-fade.jpg` | Close-up finished fade |
| Services | services-taper | `services-taper.jpg` | Barber using clippers on nape/taper |
| Services | services-beard | `services-beard.jpg` | Hot towel shave in progress |
| About | about-shop | `about-shop.jpg` | Modern barbershop interior |
| About | about-barber | `about-barber.jpg` | Barber portrait in apron, modern shop |
| About | about-detail | `about-detail.jpg` | Barber action shot (clippers + comb) |
| Gallery | gallery-1 | `gallery-1.jpg` | Profile fade + lined beard, finished cut |
| Gallery | gallery-2 | `gallery-2.jpg` | Black-and-white hot towel shave prep |
| Gallery | gallery-3 | `gallery-3.jpg` | Vintage-style barbershop interior with chair, mirrors, decor |

## Per-image metadata

### 1. `images/hero.jpg`

- **Source:** Pexels (ID 7697696 — first-pass acquisition)
- **Source URL:** `https://images.pexels.com/photos/7697696/pexels-photo-7697696.jpeg`
- **Local path:** `research/images/hero.jpg`
- **Dimensions:** 1920×1280 (Pixabay-stored at fullHD 1920)
- **File size:** 196 KB
- **Visual content:** Barber with scissors cutting a client's fade, professional photography.
- **Source attribution:** Pexels license — free for commercial use, no attribution required, photographer credit appreciated.
- **Notes:** Approved. Good for hero — shows the act of cutting, not a finished result, which works for the trust-anchor promise.

### 2. `images/services-fade.jpg`

- **Source:** Pixabay (free license)
- **Source URL:** `https://cdn.pixabay.com/photo/2017/08/02/23/56/barber-shop-2573979_1280.jpg` (Pixabay page URL — image ID 2573979)
- **Local path:** `research/images/services-fade.jpg`
- **Dimensions:** 1280×853
- **File size:** 219 KB
- **Visual content:** Profile view of a young man with a high skin fade, curly textured top, sharp line-up, dark moody background.
- **Source attribution:** Pixabay license — free for commercial use, no attribution required.
- **Notes:** Approved. Pure fade showcase — perfect for the fade service SKU card.

### 3. `images/services-taper.jpg`

- **Source:** Pexels (ID 4625632)
- **Source URL:** `https://images.pexels.com/photos/4625632/pexels-photo-4625632.jpeg`
- **Local path:** `research/images/services-taper.jpg`
- **Dimensions:** 4000×6000 (originally portrait; served landscape variant)
- **File size:** 1.9 MB
- **Visual content:** Behind-the-shoulder shot of a barber using a Wahl Magic Clip cordless clipper on a client's nape. Tattooed barber forearm visible. Industrial / exposed-brick barbershop interior.
- **Source attribution:** Pexels license — free for commercial use, no attribution required.
- **Notes:** Approved. The "Wahl Magic Clip" gold-script branding on the clipper is professional product identification, not a watermark — acceptable for use. Good for showing taper work in progress.

### 4. `images/services-beard.jpg`

- **Source:** Pixabay (free license)
- **Source URL:** Pixabay CDN — image ID 6697639 (query: "beard trim barber")
- **Local path:** `research/images/services-beard.jpg`
- **File size:** 179 KB
- **Visual content:** Close-up of a hot towel shave in progress, barber using a straight razor with a red handle, client draped in a white towel.
- **Source attribution:** Pixabay license — free for commercial use, no attribution required.
- **Notes:** Approved. Premium service marker — straight razor + hot towel = visual anchor for the hot towel shave SKU.

### 5. `images/about-shop.jpg`

- **Source:** Pixabay (free license)
- **Source URL:** Pixabay CDN — image ID 8468422 (query: "barbershop interior")
- **Local path:** `research/images/about-shop.jpg`
- **File size:** 183 KB
- **Visual content:** Modern barbershop interior — barber chair, large framed mirrors, wall art, grooming products on display.
- **Source attribution:** Pixabay license — free for commercial use, no attribution required.
- **Notes:** Approved with caveat: a "Brylcreem" vintage advertisement and an "Ave Barber Supply Co." sign are visible as wall decor in the scene. These are period-accurate decorations inside the barbershop, not overlays on the photo. Acceptable for editorial / atmospheric use; if a fully clean interior is required, a re-source is possible.

### 6. `images/about-barber.jpg`

- **Source:** Pexels (ID 8552627)
- **Source URL:** `https://images.pexels.com/photos/8552627/pexels-photo-8552627.jpeg`
- **Local path:** `research/images/about-barber.jpg`
- **Dimensions:** 3264 px wide
- **File size:** 384 KB
- **Visual content:** Confident barber portrait, denim work apron, visible tattoos on both arms (including a smiley face on the back of one hand), dark moody barbershop interior with a bearded-man mural, pendant lighting, classic barber chair visible.
- **Source attribution:** Pexels license — free for commercial use, no attribution required.
- **Notes:** Approved. No readable third-party branding visible (apron leather label exists but is illegible). Best "barber portrait" candidate in the final set.

### 7. `images/about-detail.jpg`

- **Source:** Pixabay (free license)
- **Source URL:** Pixabay CDN — image ID 18197149 (query: "barber working")
- **Local path:** `research/images/about-detail.jpg`
- **File size:** 194 KB
- **Visual content:** Action shot of an older barber using electric clippers on a young client's head. Client has a fresh fade in progress, wears a white cape with a black collar. Round wall clock and TV visible in the blurred background.
- **Source attribution:** Pixabay license — free for commercial use, no attribution required.
- **Notes:** Approved. No readable third-party branding visible in the frame. Works for an action / process shot on the About page.

### 8. `images/gallery-1.jpg`

- **Source:** Pexels (ID 12706272)
- **Source URL:** `https://images.pexels.com/photos/12706272/pexels-photo-12706272.jpeg`
- **Local path:** `research/images/gallery-1.jpg`
- **Dimensions:** 4000 px wide
- **File size:** 816 KB
- **Visual content:** Profile view of a man with a finished men's haircut — high skin fade, slicked-back voluminous top, hard part disconnection, lined-up beard. Clean white wall background.
- **Source attribution:** Pexels license — free for commercial use, no attribution required.
- **Notes:** Approved. Cleanest finished-cut shot in the set — perfect for the Gallery page's flagship image.

### 9. `images/gallery-2.jpg`

- **Source:** Pixabay (free license)
- **Source URL:** Pixabay CDN — image ID 5263019 (query: "hot towel shave")
- **Local path:** `research/images/gallery-2.jpg`
- **File size:** 327 KB
- **Visual content:** Black-and-white photograph of a barber's hands wrapping a hot towel around a client's face during shave prep. High-contrast, moody, classic.
- **Source attribution:** Pixabay license — free for commercial use, no attribution required.
- **Notes:** Approved. Strong B&W photo for the Gallery's shave moment.

### 10. `images/gallery-3.jpg`

- **Source:** Pexels (ID 4625649)
- **Source URL:** `https://images.pexels.com/photos/4625649/pexels-photo-4625649.jpeg`
- **Local path:** `research/images/gallery-3.jpg`
- **Dimensions:** 4000×6000
- **File size:** 272 KB
- **Visual content:** Interior shot of a traditional barbershop — barber cutting a client's pompadour-style cut. Client in a striped barber cape. Vintage decor: "Ave Barber Supply Co." circular logo, Brylcreem "Your Hair" advertisement poster, framed straight-razor displays, leather suspenders on the barber. Warm, cinematic lighting.
- **Source attribution:** Pexels license — free for commercial use, no attribution required.
- **Notes:** Approved with same caveat as `about-shop.jpg`: vintage product advertising visible as wall decor. Acceptable for editorial use.

## Verification protocol

Every image was checked before inclusion:

1. **URL HEAD check** — verified `Content-Type: image/...` and HTTP 200.
2. **Download size check** — minimum 8 KB; failing files were rejected.
3. **Magic-byte check** — JPEG `FF D8 FF`, PNG `89 50 4E 47`, or WebP `RIFF`.
4. **Visual inspection** — every image was loaded with vision analysis and tagged for relevance. Off-topic results (women's portraits, vintage figurines, generic office chairs) were rejected and replaced.
5. **Content blacklist** — rejected candidate tags containing "sexy," "nude," "woman," "elderly," "viking," "figurine," "souvenir," "miniature," "dress," "necklace," etc.

## Rejections during sourcing (audit trail)

Five candidate images were downloaded and rejected during the research pass.
The rejected files are archived in `research/.image-archive/` and were not
shipped to the build:

1. `services-taper_old.jpg` — Pixabay hit ID 503552b — tags included "taper, bethlehem, for" (a person named Taper in Bethlehem, PA), returned Viking ship wooden figurines on visual inspection. Replaced with Pexels ID 4625632.
2. `gallery-3_old.jpg` — first pass returned a row of generic office waiting-room chairs. Replaced with Pexels ID 4625649 (proper barbershop interior).
3. `gallery-1_old.jpg` — first pass returned a finished cut behind-the-head shot. Replaced with Pexels ID 12706272 (profile view, cleaner framing).
4. `about-detail_old.jpg` — first pass returned a scissor cut in progress (not ideal as a "detail" slot). Replaced with the action-shot final.
5. `about-barber_old.jpg` — first pass returned an image of a barber working with "TOM'S BARBER" mirrored branding visible on the cape. Replaced with Pexels ID 8552627 (clean portrait).

## Known gaps

- **No actual storefront photograph.** Operator-supplied intake did not provide a building photo, and stock-photo storefronts of barbershops are not barbershop-specific enough to be useful. Recommend the operator drop in a real storefront photo when available.
- **No barber team photos.** Every "barber" photo in the final set is a stock photo. When real barber bios are written, the operator should supply real headshots.
- **Limited diversity in skin tone / hair texture.** The 10-image set skews toward a particular demographic. Recommend expanding the set when operator-supplied photos become available.

## Operator-supplied assets

None. FACTS.json Q11 confirmed no logos, photos, or branding assets supplied.
All 10 images are stock; production site should reference these via `LOCAL_PATH`
(local file), not `SOURCE_URL` (audit metadata only).

## Hard rule compliance

- ✅ Every image downloaded to `research/images/`, no hotlinks.
- ✅ No external image host added to `next.config.js` `images.remotePatterns` for project images.
- ✅ No Unsplash URLs.
- ✅ Pixabay → Pexels fallback ordering.
- ✅ Source URL HEAD-validated before download.