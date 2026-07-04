# MESSAGING.md — Vocabulary Prevalence + Objection Map

> Audience-facing messaging for Northside Fade Co.
> Every term in this document has a prevalence score from the 10-site
> competitor crawl (see research/COMPETITORS.md for the source list).
> Objections map to specific copy patterns from the same crawl.

## How this is built

Each term was scored by counting how many of the 10 competitor sites surfaced
it in the homepage HTML (title, meta, H1/H2, or visible body copy). The raw
counts are in the prevalence table below. Operator-supplied audience vocabulary
(FACTS.json Q5) is overlaid on the same table so the copywriter can see which
operator terms are also high-prevalence in the segment.

A "high prevalence" score (≥6/10) means: it is safe to use as a default term,
because most of the segment uses it. A "low prevalence" score (≤3/10) means:
the operator should use it only if they want to deliberately signal a niche.

## Vocabulary prevalence table (10 competitor sites)

| Term | Sites using it | Operator-supplied? | Recommended usage |
|---|---|---|---|
| fade | 8/10 | yes | Use as the dominant service term. "Signature fade," "precision fade," "skin fade," "taper fade" are all sub-variants. |
| taper | 5/10 | yes | Pair with fade ("taper fade," "low taper," "high taper"). Do not use as a standalone service name. |
| lineup / line-up / line up | 6/10 | yes | Use as a service SKU ("Precision Line-Up") and as a complimentary add-on. |
| beard trim | 6/10 | yes | Standard second SKU. "Beard Trim" is fine; "beard sculpt" is brandier but less common. |
| hot towel / hot towel shave | 5/10 | yes | Premium service marker. Always paired with "shave" in modern copy. |
| walk-in | 5/10 | yes | Use in secondary CTA and in About/Services headers. |
| appointment | 7/10 | yes | Use in primary CTA. Pair with walk-in to neutralize either extreme ("walk in or book ahead"). |
| shape-up | 1/10 | yes (operator) | Operator-supplied but rare in modern copy. Recommend merging into "Precision Line-Up" and dropping "shape-up" from the public surface unless the operator wants a niche / Latin-influenced positioning. |
| precision | 6/10 | (researcher-derived) | Strong modifier for haircut service ("The Precision Cut"). |
| classic | 4/10 | (researcher-derived) | Heritage framing. Use sparingly — overused = generic. |
| modern | 4/10 | (researcher-derived) | Used in "modern fades," "modern barbering." Do not stack with "classic." |
| old school | 4/10 | (researcher-derived) | Heritage / Schorem-style framing. Avoid if positioning is "modern minimalist" — these are tension points, not synonyms. |
| expert / precision / trained | 4/10 | (researcher-derived) | Quality-skepticism objection handler. Use in About and Services. |
| book | 7/10 | (researcher-derived) | "Book Now," "Book Online," "Book Ahead." Universal primary CTA verb. |

## Vocabulary NOT to use (low-prevalence + segment-incompatible)

| Term | Why not |
|---|---|
| Rockabella | Schorem-specific vintage vocabulary. Niche. |
| Pompadour | Specialty cut; signals retro / subculture positioning. |
| Flat top / flattop | Specialty cut; signals older / military positioning. |
| High and tight | Military-specific. Out of scope. |
| Wet shave | Somewhat dated phrasing. "Hot towel shave" is more modern and more prevalent. |
| Salon | Mixes categories. The site is a barbershop. |

## Objection map

The operator supplied three objections (FACTS.json Q6). Each is mapped to a
specific copy pattern drawn from the competitor crawl.

### Objection 1: Price uncertainty

**Competitor pattern (Fadeaway Mike's):** Publish line-item pricing on the
homepage or Services page. Use plain dollar amounts, not "starting at."

**Recommended Northside copy pattern:**

- **Homepage hero strip:** "Haircut from $40 · Beard Trim from $25 · Hot Towel Shave from $50" — three SKUs, plain numbers, no "starting at."
- **Services page:** Full menu table with prices per SKU.
- **About page:** No pricing — this page is for trust, not for conversion.
- **FAQ block on Services:** "Why is a fade $40?" — optional but answers the implicit question "is this a fair price."

### Objection 2: Wait time

**Competitor pattern (Sport Clips, Great Clips, Side Street):** Two parallel
CTAs — "Book Online" and "Walk-Ins Welcome" — both above the fold.

**Recommended Northside copy pattern:**

- **Primary CTA:** "Book Now" (single verb, unambiguous).
- **Secondary CTA:** "Walk-Ins Welcome" or "Check In Online" — placed immediately under the primary.
- **Hero strip:** "Walk in any time · or book ahead to skip the wait."
- **Services page header:** "Walk in for a fade or book ahead — we hold 30% of our day for walk-ins."

### Objection 3: Quality / skill skepticism

**Competitor pattern (Blind Barber, Baxter Finley):** "Designed by barbers,"
"the best barber in [city]," heritage framing, portfolio gallery.

**Recommended Northside copy pattern:**

- **Hero copy:** Use the operator-supplied verbatim — "After using this service, I finally have a cut I can trust every visit." This is the explicit promise that addresses the objection. **Do not paraphrase.**
- **About page:** One bio per barber. Name, photo, years cutting, signature style. No fake accolades.
- **Gallery page:** 8–12 finished-cut photos. Before/after is acceptable; doctored before/after is not.
- **FAQ block:** "Who cuts your hair?" — answered with one or two barber bios, not a corporate paragraph.

## Recommended copy skeleton (for the copywriter)

```
Homepage H1:        A cut you can trust every visit.
Homepage subhead:   Precision fades, beard trims, and hot-towel shaves
                    from barbers who do this all day, every day.
Homepage CTA:       Book Now  ·  Walk-Ins Welcome
Homepage price:     Haircut from $40 · Beard Trim from $25 ·
                    Hot Towel Shave from $50

Services H1:        Fades, beards, and shaves — done right.
Services subhead:   Walk in or book ahead. We hold 30% of every day
                    for walk-ins.
Services CTAs:      Book a Cut  ·  Book a Beard  ·  Book a Shave

About H1:           Two chairs. Ten years of fades.
About subhead:      Trained in the classics, fluent in the modern.

Gallery H1:         Recent work.
Gallery subhead:    A cut a week, photographed.

Contact H1:         Find us.
Contact subhead:    Walk in or book ahead. [address] · [hours] · [phone]
```

## Forbidden-phrase guard (pointer)

The forbidden phrase list (FACTS.json Q8) is enforced downstream by the
COPYWRITER/COPY-01 gate. The list itself is not reproduced here — see FACTS.json.
**Do not bypass the COPY-01 check by using paraphrases — the canonical list
contains the paraphrased variants already.**

## Source

Counts derived from `/tmp/research-snapshots/*.html` (10 competitor sites),
title/meta fallback for JS-rendered sites. Full per-site analysis in
research/COMPETITORS.md.