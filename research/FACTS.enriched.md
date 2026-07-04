# FACTS.enriched.md — Operator-Supplied Facts + Citations

> Every claim below cites a source. Operator-supplied facts from FACTS.json
> (the operator answered the intake questions) are flagged as **OPERATOR**.
> Industry/competitor claims cite the source site or research file. Operator
> blanks are flagged as **[BLANK — needs operator]** with a recommended
> default drawn from the competitor reference set.

## Business identity

| Field | Value | Source |
|---|---|---|
| Project name | Northside Fade Co. | OPERATOR (FACTS.json Q1) |
| Industry | Modern minimalist barbershop | OPERATOR (FACTS.json Q1) |
| Service area | US (city unspecified) | [BLANK — needs operator] |
| Address | [BLANK — needs operator] | FACTS.json blank |
| Hours | [BLANK — needs operator] | FACTS.json blank |
| Phone | [BLANK — needs operator] | FACTS.json blank |
| Email | [BLANK — needs operator] | FACTS.json blank |

## Pages

| Page | Status | Source |
|---|---|---|
| Home | Required | OPERATOR (Q3) |
| Services | Required | OPERATOR (Q3) |
| About | Required | OPERATOR (Q3) |
| Gallery | Required | OPERATOR (Q3) |
| Contact | Required | OPERATOR (Q3) |
| CMS | Static (no CMS) | OPERATOR (Q4) |

## Audience vocabulary (operator-supplied)

The following terms are the operator-curated audience vocabulary (FACTS.json Q5).
These map almost 1:1 to the highest-prevalence terms pulled from the 10-site
competitor crawl — see research/MESSAGING.md for the prevalence table.

- **fade** — dominant term across 8/10 competitor sites.
- **taper** — used by 5/10 competitor sites; usually paired with fade.
- **lineup** — 6/10 sites. Often a complimentary add-on (Blade & Broom: "complimentary neck shave/line up").
- **beard trim** — 6/10 sites, standard second SKU.
- **hot towel shave** — 5/10 sites, premium service marker.
- **walk-ins** — 5/10 sites, wait-time objection handler.
- **appointment** — 7/10 sites, framed as additive to walk-in.
- **shape-up** — 1/10 sites in competitor crawl, but operator-supplied. Keep in copy because the operator explicitly listed it.

## Objections (operator-supplied)

| Objection | How competitor sites address it | Recommended Northside handling |
|---|---|---|
| Price uncertainty | Public line-item pricing (Fadeaway Mike's), plain-spoken pricing language (Blade & Broom) | Surface pricing on Services page. Use plain dollar amounts, not "starting at." |
| Wait time | Online check-in (Sport Clips, Great Clips), "Walk-ins welcome" + "book ahead" framing (Side Street) | Above-the-fold CTA: "Walk-Ins Welcome — or Book Ahead." Embed online check-in if available. |
| Quality / skill skepticism | "Designed by barbers" (Blind Barber), heritage framing (Baxter Finley), portfolio gallery | About page with barber bios, Gallery page with finished-cut photos. |

Source: COMPETITORS.md (per-site analysis).

## Hero outcome (operator-supplied, verbatim)

> "After using this service, I finally have a cut I can trust every visit."

This is the operator-curated hero promise. It maps to the "quality / skill
skepticism" objection. Use this as the literal hero copy on the homepage. The
page architecture should resolve around it, not around a generic "Precision
Cuts & Shaves" line. **Cite this verbatim — do not paraphrase.**

## Forbidden phrases

The operator-curated forbidden phrase list (FACTS.json Q8) is the canonical
phrase guard. The full list is enforced downstream by the COPYWRITER/COPY-01
gate; this document does not reproduce the list. **Downstream: load the
forbidden phrase list from FACTS.json at build time, do not embed it here.**

## CTAs

| Field | Value | Source |
|---|---|---|
| Primary CTA | [BLANK — needs operator] | FACTS.json blank. Recommended default: "Book Now" — used by 7/10 competitor sites. |
| Secondary CTA | [BLANK — needs operator] | FACTS.json blank. Recommended default: "Walk-Ins Welcome" — wait-time objection handler. |
| Booking provider | [BLANK — needs operator] | FACTS.json blank. Recommend Booksy or Squire (industry default). |

## Reviews / social proof

| Field | Value | Source |
|---|---|---|
| Reviews | [BLANK — needs operator] | FACTS.json blank. Recommend Google Business Profile + 3–5 quoted reviews on Home or About. |
| Testimonials count | [BLANK — needs operator] | FACTS.json blank. |
| Rating / star count | [BLANK — needs operator] | FACTS.json blank. |
| Google rating URL | [BLANK — needs operator] | FACTS.json blank. |

## Services + pricing

Operator-supplied intake did not list services or pricing. The reference
default below is drawn from the Fadeaway Mike's public menu (a US barbershop
with similar positioning), adjusted to the modern-minimalist framing. **All
prices are placeholders — confirm with operator before publishing.**

| SKU | Placeholder price | Source |
|---|---|---|
| Precision Haircut (signature cut, fade + styling) | $40 | Fadeaway Mike's "The Fadeaway" $35 — adjusted +$5 for higher-end positioning. Industry band $35–$45 (research/INDUSTRY.md). |
| Kids Cut (12 and under) | $30 | Fadeaway Mike's "Kids Cut 13 and younger" $30. |
| Hot Towel Shave | $50 | Industry band $45–$55 (research/INDUSTRY.md). Fadeaway Mike's lists $40 for a basic hot towel shave; $50 reflects premium standalone shave. |
| Precision Line-Up / Shape-Up | $20 | Fadeaway Mike's "Precision Line up" $20. Operator vocabulary includes both "lineup" and "shape-up" — recommend merging into a single SKU named "Precision Line-Up." |
| Haircut + Beard Trim | $60 | Fadeaway Mike's "Haircut and Beard Trim" $50 — bumped to $60 for combo premium. Industry band $55–$65. |
| Haircut + Hot Towel Shave | $70 | Fadeaway Mike's "Haircut and Towel Shave" $65 — bumped to $70. |

**Operator should confirm:**
- Exact service list (is there a kids cut? is there a standalone shape-up?)
- Final pricing
- Service durations (impacts booking slot configuration)
- Whether to publish pricing publicly or gate it on the booking page

## Differentiators

| Field | Value | Source |
|---|---|---|
| Key differentiator 1 | [BLANK — needs operator] | FACTS.json blank. Industry defaults to: "trained barbers," "precision fades," "walk-in friendly." Recommend filling with what's actually unique. |
| Key differentiator 2 | [BLANK — needs operator] | FACTS.json blank. |
| Key differentiator 3 | [BLANK — needs operator] | FACTS.json blank. |

## Brand assets

| Field | Value | Source |
|---|---|---|
| Logo file | [BLANK — needs operator] | OPERATOR (Q11) — no assets supplied. |
| Photos | None supplied | OPERATOR (Q11) — sourced 10 images from Pixabay + Pexels. See research/VALIDATED_IMAGES.md. |
| Color palette | [BLANK — needs operator] | FACTS.json blank. Industry default for modern minimalist: charcoal + warm wood + brass accent. |
| Typography | [BLANK — needs operator] | FACTS.json blank. Industry default: clean sans (Inter, Söhne) + serif accent for hero. |

## Open questions for the operator

The following fields were blank in FACTS.json and were filled with industry
defaults in this document. Each must be confirmed before the site goes live:

1. **City / service area.** Pricing bands and walk-in framing both shift with geography.
2. **Exact service menu + prices.** Placeholders above.
3. **Hours, address, phone.** Standard contact-page needs.
4. **Booking provider.** Booksy vs Squire vs Boulevard vs Square Appointments.
5. **Reviews.** Pull from Google Business Profile or supply a quote set.
6. **Three differentiators.** Must come from operator — researcher cannot invent differentiators without claiming facts.

## Audit trail

This document was produced by the `minimax-researcher` profile from intake
answers in `.hermes/intake/INTAKE_ANSWERS.json` and competitor analysis in
`/tmp/research-snapshots/`. Every quoted competitor phrase has a per-site
URL in research/COMPETITORS.md. Every pricing number has a source URL or a
flagged placeholder.