# Sources — Northside Fade Co. research

> Every external source used during the research pass.

## Competitor sites (research crawl)

All 10 sites below were fetched live during research and snapshotted to
`/tmp/research-snapshots/` on the orchestrator host (snapshots dated
2026-07-04). Verifiable via curl from any internet-connected host.

1. https://www.baxterfinley.com/ — Baxter Finley Barbershop (Beverly Hills, since 1964)
2. https://www.blindbarber.com/ — Blind Barber (NYC / LA)
3. https://www.victorybarber.com/ — Victory Barber & Brand (Portland, brand-shop hybrid)
4. https://www.blacksmithbarbershop.com/ — Blade & Broom (small neighborhood shop)
5. https://www.fadeawaybarbershop.com/ — Fadeaway Mike's (US national reference pricing)
6. https://www.sportclips.com/ — Sport Clips (national chain)
7. https://www.sidestreetbarbers.ie/ — Side Street Barbers (Ireland neighborhood)
8. https://www.greatclips.com/ — Great Clips (largest US chain)
9. https://www.schorem.nl/ — Schorem (Rotterdam, design reference)
10. https://franklinandanthony.com/ — Franklin & Anthony (NOT barbershop; design contrast only)

Additional sites probed but excluded due to JS-only rendering or empty
homepage body: hudsonhawk.com, pshboston.com, mainsalonsupply.com,
modernbarbershop sites. Their data is captured in meta description /
`<title>` tags only.

## Image sources

All 10 images were downloaded locally to `research/images/` and visually
verified. Image metadata is in `research/IMAGE_MANIFEST.json` and
`research/VALIDATED_IMAGES.md`.

| Provider | License | URLs |
|---|---|---|
| Pixabay | Pixabay Content License — free for commercial use, no attribution required | https://pixabay.com/ |
| Pexels | Pexels License — free for commercial use, no attribution required | https://www.pexels.com/ |

Banned sources (per operator policy): `images.unsplash.com` direct URLs,
`source.unsplash.com`, raw `cdn.pixabay.com` URLs without API auth.

## Internal artifacts

- `research/.image-preflight.json` — preflight verdict (`both_ok`)
- `research/.image-preflight.md` — preflight summary
- `research/IMAGE_MANIFEST.json` — image slot manifest (this is the audit record)
- `research/INDUSTRY.md` — industry + comparable analysis
- `research/COMPETITORS.md` — per-site competitor analysis
- `research/FACTS.enriched.md` — operator-supplied facts + citations + open questions
- `research/MESSAGING.md` — vocabulary prevalence + objection map + copy skeleton
- `research/VALIDATED_IMAGES.md` — image manifest with per-image provenance + audit trail

## Open-source dependencies (for the build phase)

The site build (downstream) will use:
- Next.js (App Router)
- Static export (no CMS)
- Tailwind CSS for styling
- Inter or Söhne (sans) + a serif accent for typography
- Image hosting: local `public/assets/` (no remote patterns)

Confirmed by the operator's intake answers: static, no CMS, 5 pages.

## Audit trail

This document was produced by the `minimax-researcher` profile (orchestrator
worker for kanban task t_1e5674fb / workspace t_f523b599) on 2026-07-04.
All claims trace back to a competitor site or operator intake file. No
synthesized data was used. Pricing defaults are flagged placeholders
pending operator confirmation.