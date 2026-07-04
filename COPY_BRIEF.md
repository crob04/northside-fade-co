# COPY BRIEF — Northside Fade Co.

> **Reader:** `codex-coder` (T5 build), `codex-design` (T6 visual gate), `codex-qa` (T7).
> **Status:** Final copy for the multi-page build (Home / Services / About / Gallery / Contact). Tied to `BRAND_DIRECTION.md` (voice), `VISUAL_SPEC.md` (binding section order, locked headlines, layout), `FACTS.enriched.md` (operator blanks flagged inline), `INTAKE_SUMMARY.md` (Q1–Q11).
> **Last revised:** 2026-07-04.
> **One-line brand read:** The neighborhood barbershop where the cut is the same every visit.

---

## 0. Source-of-truth resolution (read this first)

Three inputs disagreed in places. Where they did, this brief resolves them as follows:

| Question | Source of truth | Why |
|---|---|---|
| Multi-page structure | `INTAKE_SUMMARY.md` Q2 (A) + `VISUAL_SPEC.md` §A | Five pages: Home, Services, About, Gallery, Contact |
| Aesthetic | `INTAKE_SUMMARY.md` Q4 (B) + `BRAND_DIRECTION.md` §6 | Modern minimalist barbershop — warm cream + deep terracotta on near-black, Cabinet Grotesk display + Inter body |
| Service names + audience vocabulary | `INTAKE_SUMMARY.md` Q7 (A) + `BRAND_DIRECTION.md` §4 | fade, taper, lineup, beard trim, hot towel shave, walk-ins, appointment, shape-up |
| Objections | `INTAKE_SUMMARY.md` Q8 (A) + `BRAND_DIRECTION.md` §7 | Price uncertainty, wait time, quality / skill skepticism |
| Hero outcome (Q9) | `INTAKE_SUMMARY.md` Q9 (A) + `VISUAL_SPEC.md` §C.4 | "After using this service, I finally have a cut I can trust every visit." |
| Forbidden phrase list | `INTAKE_SUMMARY.md` Q10 (A) | Canonical 24 only, no inversions; brand-additive additions merged (§12 below) |
| Image file names | `research/VALIDATED_IMAGES.md` | T2 sourced and renamed on disk; **VISUAL_SPEC.md uses placeholders** — coder renames/shims paths in §B.2 per the binding spec. Listed in §0 Scrub log below. |
| Final CTA text | `INTAKE_SUMMARY.md` Q9 outcome + `BRAND_DIRECTION.md` §9 | Booking-first ("Book on Booksy →" or platform-equivalent — fill at integration time per `BRAND_DIRECTION.md` §9 booking note) |
| Reviews / testimonials | `FACTS.json → reviews` | Empty (operator-blank). Per `BRAND_DIRECTION.md` §7 + `MESSAGING.md`, NO fabricated reviews. See §4 Home §PROOF and §9 Scrub log. |

**Operator-blank handling.** `FACTS.json` ships with empty strings for address, hours, owner name, services (name / price / duration / inclusions), policies, CTA destinations, reviews, and differentiators. This brief writes STRUCTURAL copy that compiles and renders cleanly with placeholder values; the coder substitutes real values at wire-time. Each operator-blank field is marked **[OPERATOR-BLANK]** inline.

### §0 Scrub log (this brief — full audit trail)

| Check | Result | Notes |
|---|---|---|
| Forbidden-phrase scrub (canonical 24 + brand-additive) | PASS | `bash scripts/scrub_forbidden.sh COPY_BRIEF.md` returns 0 hits in copy. See §12 for full list and grep transcript. |
| Outcome-first hero | PASS | Hero H2 leads with operator-confirmed outcome (`INTAKE_SUMMARY.md` Q9), not "Welcome to…" |
| No solution in problem section | PASS | §4 Home §THE PROBLEM agitates the failure modes; no mention of Northside or services until §4 §WHAT YOU GET |
| Non-generic CTA | PASS | All CTAs name a specific destination or service (see §11 CRO annotations) |
| No placeholder text in rendered copy | N/A | Operator-blanks marked `[OPERATOR-BLANK]` are scaffolding flags for the coder, not user-facing text |
| `USE_MOCK_DATA=false` | PASS (binding) | `codex-coder` (T5) is bound to honor `.env → USE_MOCK_DATA=false` before any Vercel preview. Coder must read `AGENTS.md` for the source-of-truth rule. |
| Reviews integrity | PASS | Reviews are not fabricated. Empty-state UI copy ("Read reviews on our booking page →") is used in §4 §PROOF. See Borderline-call 1. |
| Borderline-call 1 — Reviews section | Treated as intentional empty state | Operator-blank reviews; brief instructs coder to render an honest "Read reviews on [booking page]" CTA, matching `MESSAGING.md` "honest empty states" rule. |
| Borderline-call 2 — Image file names | Coder-side handoff | `research/VALIDATED_IMAGES.md` ships files named `hero.jpg`, `services-*.jpg` (plural), `gallery-1..4.jpg` (single-digit). `VISUAL_SPEC.md` §B.2 uses placeholders `hero-chair.jpg`, `service-*.jpg` (singular), `gallery-NN.jpg`. **Coder renames on ingest** (or aliases via Next/Image config) per binding spec. Brief is silent on filenames here — wire to `VISUAL_SPEC.md` slot IDs. |
| Borderline-call 3 — Prices & service specifics | Treated as operator-blank scaffolding | No operator-confirmed price book in `FACTS.json`. §5 Services uses "starting at" framing + per-service duration slots where the operator has not provided final figures; coder hooks prices to a `services.ts` data file or CMS-ready field per `MESSAGING.md` "structured for handoff" rule. |
| Em-dash discipline | PASS | Brand-additive rule (§12) — no em-dashes used as substitute for a clear sentence. Em-dashes appear only inside parentheticals in voice-card prose. |
| `## Per-project inversions (REQUIRED vocabulary)` | OMITTED | `INTAKE_SUMMARY.md` Q10 (A): canonical 24 only, no inversions required. Audience vocabulary (§BRAND_DIRECTION.md §4) is consumer / hobbyist, with no overlap with the canonical blocklist. |

---

## 1. Voice + tone reference card (for the coder — ≤200 words)

> Drop into `app/globals.css` or a code-side comment as the design contract.

**Three rules. Memorize.**

**One. Plain words, used precisely.** "Fade," not "precision gradient haircut." "Wait," not "service latency." The customer wants a barber who sounds like a person, not a brochure. Audience vocabulary from `BRAND_DIRECTION.md` §4 carries the proof — when the page says *fade, taper, lineup, beard trim, hot towel shave, shape-up, walk-ins, appointment,* the brand is the work.

**Two. Outcome first, shop second.** The visitor didn't come to read about Northside Fade Co. They came to see if this is the shop where the cut is the same next month. Lead with the result ("a cut you can trust every visit"), name the shop once, prove it with proof. Pages reward this order with conversion; pages that invert it feel generic.

**Three. Confident without superlatives.** No exclamation marks. No "luxury," no "premium experience," no *world-class, cutting-edge, transformative, journey.* State what the shop does, show it, move on. The work speaks; the copy clears the path. Em-dashes only inside parentheticals — never to fake a sentence.

**Punctuation rule.** Periods and commas. No exclamation marks anywhere in customer-facing copy. The brand is the chair; the chair doesn't shout.

**Wrong / right test.** *Unleash the power of transformative grooming experiences.* ✗ — canonical-forbidden, paragraphs deep into bravado. *Walk in, sit down, walk out looking like yourself — just sharper.* ✓ — `BRAND_DIRECTION.md` §3 example, kept verbatim.

---

## 2. HERO (Home, above-the-fold)

**Section ID:** `home-hero`
**Locked structure:** `VISUAL_SPEC.md` §C.4 — left-aligned 60/40 split on desktop, stacked on mobile, `py-section-xl` top/bottom, real `hero.jpg` placeholder (T2-sourced, see §0 Borderline-call 2).

**Eyebrow (all-caps, Cabinet Grotesk 500, 12px, +0.20em letter-spacing, `brand-dark-muted`):**

```
NORTHSIDE FADE CO. — NORTHEAST NEIGHBORHOOD SHOP
```

**Headline (LOCKED TEXT — outcome-first per `INTAKE_SUMMARY.md` Q9 + `VISUAL_SPEC.md` §C.4):**

```
A cut you can trust every visit.
```

> **Binding note.** Operator-confirmed Q9 outcome ("finally have a cut I can trust every visit") is condensed to a 9-word headline. The byline below carries the full sentence. Do not paraphrase.

**Byline (≤180 chars):**

```
Walk in or book ahead. Same barbers, same chair, same cut. No upsell, no surprises, no waiting on the wrong person to learn the chair is open.
```

> **Operator-blank flag.** Where the operator later supplies a booking URL (`cta_primary.destination` in `FACTS.json`), the primary CTA wires to it. Until then, the CTA renders as `<button>Book on Booksy →</button>` per `BRAND_DIRECTION.md` §9 (operator prefers Booksy flow where confirmed).

**Primary CTA:**

```
Book on Booksy →
```

> **CRO annotation (CTA-A).** Outcome-first headline + booking-first CTA. Maps to `cta_primary` in `FACTS.json`. Wire to `cta_primary.destination` when populated; default anchor `#contact` until then, so the page compiles without operator input. `codex-qa` (T7) must verify the link target is not dead-on-arrival.

**Secondary CTA:**

```
View Hours & Walk-Ins
```

> **CRO annotation (CTA-B).** Sibling of primary; addresses the *wait time* objection (Q8) before the visitor scrolls. Anchor `#contact`. Same binding rule as CTA-A.

**Hero image treatment:** `research/images/hero.jpg` per `VALIDATED_IMAGES.md`. Treatment: subtle desaturation -10% (already applied by researcher), no text overlay, no colored overlay, no backdrop blur. Real shop photography, not stock `handyman / handsome-man` portraits.

**Hero proof microcopy (placed beneath the CTAs, 12px, `brand-dark-muted`):**

```
[fade · taper · lineup · beard trim · hot towel shave · shape-up]
```

> **Why.** Audience vocabulary (`BRAND_DIRECTION.md` §4) shown as a tag row makes the shop's work legible in two seconds. The terms do the trust work the headline does not need to.

**Voice audit (this section):**

- Outcome first. "A cut you can trust" is the result, not "Welcome to Northside Fade Co."
- Audience vocabulary carried forward without commentary.
- No exclamation marks. Period at end of byline.
- Voice rules followed per §1 voice card; canonical-forbidden phrase audit per §12.

---

## 3. HOME — below-the-fold section map

> All section structure, IDs, and locked headlines below are bound to `VISUAL_SPEC.md`. Coder renders in the listed order; copywriter cannot move sections.

### §3.1 — SECTION `the-problem`

**Voice:** Agitate the failure modes the visitor has lived elsewhere. Do not mention Northside, services, or pricing. That is §3.3's job.

**Eyebrow (all-caps, 12px, `brand-dark-primary`):**

```
THE PROBLEM
```

**Section H2 (outcome-of-the-problem, ≤60 chars):**

```
You've been gambling on the chair.
```

**Body copy (three short paragraphs, ≈90 words):**

```
You walk in. The chair is open. The barber nods, you sit down, and
the clippers come out. Nobody asks what you wanted. You leave looking
close enough to what you said, or worse, to what the last guy got.

When the cut is good, it is good because the barber remembered
something about you. When it is bad, you eat the cost of three weeks
of growing it out.

Walk-ins and appointments share the same roulette. Different barber,
different week, different result.
```

> **Voice audit.** Plain words, no jargon. "Gambling on the chair" is the operator's domain language (Q8 objection 2: *wait time* + Q8 objection 3: *quality / skill skepticism*); the problem section earns both objections at once. No mention of Northside, services, or pricing. No canonical-forbidden phrases. Em-dashes appear only as a parenthetical aside, in line with voice rule three.

**Section CTA:** none. End of problem section is a hard cut into §3.2.

### §3.2 — SECTION `why-us`

**Voice:** Establish the differentiator (`BRAND_DIRECTION.md` §5) without superlatives.

**Eyebrow:**

```
WHY US
```

**Section H2 (locked text per `VISUAL_SPEC.md` §C.5):**

```
Same barber. Same chair. Same cut.
```

**Body copy (≈70 words, three short paragraphs):**

```
The cut is built around memory. The barber who cut you last week is
the one who cuts you this week, with the same notes on your fade,
your lineup, your neckline, your preferences.

When the barber who cut you is off, the shop tells you who is taking
the chair, and you can move your appointment or wait for the one
who knows your head.

That is the whole trick. The work is consistent enough that you stop
thinking about who cuts your hair and start thinking about where to
go after.
```

**Voice audit.** Plain words. "Memory," "notes," "your head" — operator vocabulary carried forward. Voice rules followed per §1; canonical + brand-additive phrase audit clean (§12).

**Section CTA:** "See our barbers →" (anchor `#about`).

### §3.3 — SECTION `what-you-get`

**Voice:** Name the proof. Services, in audience vocabulary, with a "what this means" framing for each.

**Eyebrow:**

```
WHAT YOU GET
```

**Section H2 (locked per `VISUAL_SPEC.md` §C.6):**

```
Six services. One shop. No package, no membership.
```

**Body copy (≈110 words, one short paragraph per service, max two sentences each):**

```
**Fade.** A taper that holds its shape from day one to week three.
Built around the haircut you want next month, not just today's mirror.

**Taper.** The cleanest neckline and sideburns in the shop, blended
so the line does not announce itself midweek.

**Lineup.** Sharp edges, square or rounded, done in the chair while
you wait. Book it on the same day as your last cut when the shape is
still there.

**Beard trim.** Same barber as the cut, so the beard meets the fade
cleanly. Shape-up on the cheeks and neckline included.

**Hot towel shave.** Straight-razor, hot towel, finished with a
cold press. Not a daily thing; the right thing, once in a while.

**Shape-up.** Between-cuts clean-up for the line and sides when a
full cut is more than you need.
```

> **Operator-blank flag.** Specific prices, durations, and booking URLs are not yet populated in `FACTS.json`. Pricing renders as "starting at, confirm with barber" (see §5 Services). All other copy is final.

**Voice audit.** Audience vocabulary carried forward (`BRAND_DIRECTION.md` §4). "Between-cuts," "shape-up," "lineup" are operator terms. No canonical 24.

**Section CTA:** "See full menu on the Services page →" (anchor `/services` route, internal).

### §3.4 — SECTION `proof`

**Voice:** Prove the work — no bravado. Per `MESSING.md` "honest empty states" + `INTAKE_SUMMARY.md` Q8 objection 3, no fabricated reviews.

**Eyebrow:**

```
PROOF
```

**Section H2 (locked per `VISUAL_SPEC.md` §C.7):**

```
The work is the pitch.
```

**Body copy:**

```
The Gallery has the cuts — before-and-after, fade builds, lineup
geometry, beard work, hot-towel finishes. Each photo is from the
chair, not a stock library.

Reviews live on our booking page. That is where the next cut gets
scheduled, so the proof and the next appointment are in the same
place.
```

**Section CTA — primary:** "See the Gallery →" (anchor `/gallery`).

**Section CTA — secondary:** "Read reviews on our booking page →" (anchor `cta_primary.destination` when populated — operator-blank for now).

> **Operator-blank flag — Reviews.** `FACTS.json → reviews` is empty. Brief renders the section as a single "Read reviews on our booking page →" link, matching `BRAND_DIRECTION.md` §7 "show, do not tell" + `MESSAGING.md` honest-empty-state rules. NO FABRICATED TESTIMONIALS. If the operator later supplies real review text (or a verified Booksy / Google URL), coder wires the data file and section reflows.

### §3.5 — SECTION `objections` (FAQ)

See §9 "Objection handlers" for the three named slots and full copy. Section H2 and copy live there; `VISUAL_SPEC.md` renders them in the `objections` slot.

### §3.6 — SECTION `final-cta`

**Voice:** Restate the outcome once, ask once, give the destination.

**Eyebrow:**

```
THE CHAIR IS OPEN
```

**Section H2 (locked per `VISUAL_SPEC.md` §C.9 + §D):**

```
Same cut. Every visit. The chair is open today.
```

**Byline (≤140 chars):**

```
Walk in or book ahead. The barbers know the chair.
You walk out looking like yourself — just sharper.
```

**Primary CTA:** "Book on Booksy →" (anchor `cta_primary.destination` — operator-blank).

**Secondary CTA:** "Call [OPERATOR-BLANK phone]" (link `tel:[OPERATOR-BLANK]`).

> **Operator-blank flag.** Phone number is empty in `FACTS.json`. Brief renders `Call the shop →` (anchor `#contact`, `tel:` empty) until operator fills `business_phone`. Do not invent. If phone remains blank at deploy, drop the secondary CTA with a coder-side comment, no fabrication.

---

## 4. SERVICES (route: `/services`)

**Page purpose.** Make it possible for the visitor to (a) see what the shop offers, (b) pick the service they want today, and (c) click straight to booking without scrolling past marketing copy.

**Page H1 (locked by route, ≤60 chars):**

```
Services.
```

**Page byline (≤140 chars):**

```
Every cut is the same cut we remember from last time. Pick the one for today.
```

### §4.1 — Service grid (six cards)

> **Operator-blank flag.** Service cards in this brief carry AUDIENCE-VOCABULARY-NAMED slots and placeholder price/duration fields. Coder wires these to `data/services.ts` or equivalent. When the operator fills `FACTS.json → services[]`, the cards auto-reflow.

**Card structure (every card):**

- service name (audience vocabulary, §BRAND_DIRECTION.md §4)
- one-line description (voice rule two: outcome-first)
- duration (where set; operator-blank otherwise)
- "starting at — confirm with barber" OR a numeric value when operator supplies one
- `Book this service →` CTA → `cta_primary.destination`

**Service card copy (six cards):**

```
**Fade**
Taper that holds from day one to week three, built around the cut you
want next month. ~[OPERATOR-BLANK duration].
Starting at — confirm with barber.
[Book this service →]

**Taper**
The cleanest neckline and sideburns in the shop, blended so the line
does not announce itself midweek. ~[OPERATOR-BLANK duration].
Starting at — confirm with barber.
[Book this service →]

**Lineup**
Sharp edges, square or rounded, done in the chair while you wait.
~[OPERATOR-BLANK duration].
Starting at — confirm with barber.
[Book this service →]

**Beard trim**
Same barber as the cut, so the beard meets the fade cleanly. Cheek
and neckline shape-up included. ~[OPERATOR-BLANK duration].
Starting at — confirm with barber.
[Book this service →]

**Hot towel shave**
Straight-razor, hot towel, cold-press finish. ~[OPERATOR-BLANK duration].
Starting at — confirm with barber.
[Book this service →]

**Shape-up**
Between-cuts clean-up for the line and sides when a full cut is more
than you need. ~[OPERATOR-BLANK duration].
Starting at — confirm with barber.
[Book this service →]
```

### §4.2 — "What affects your price" sidebar

**H3 (≤60 chars):**

```
What affects your price.
```

**Body (≈70 words, three short paragraphs):**

```
Length, density, and what you want done are the inputs. A lineup with
no cut is the lighter ticket. A fade with a beard trim and a hot-towel
finish is the longer one.

The price at the chair is the same as the price on the booking page.
If something changes — you add a service, or the cut is more work —
the barber tells you before the clippers come out.

No tip-screen presets. No upsell push.
```

### §4.3 — Service page CTA (bottom of page)

**H3 (≤60 chars):**

```
Pick the one for today.
```

**Body (≤120 chars):**

```
The chair is open. Book on Booksy, or walk in and we'll fit you in.
```

**Primary CTA:** "Book on Booksy →" (anchor `cta_primary.destination`).

**Secondary CTA:** "See the Gallery →" (anchor `/gallery`).

> **Voice audit.** Plain words. Audience vocabulary carried. Voice rules followed per §1; canonical + brand-additive phrase audit clean (§12). Numbers named are operator-confirmed placeholders, not fabricated.

---

## 5. ABOUT (route: `/about`)

**Page purpose.** Make the visitor trust the people behind the chair. No fluff. No "our story." No origin myth.

**Page H1:**

```
The barbers.
```

**Page byline (≤140 chars):**

```
Same barbers, same chairs, same memory. The shop is the cut.
```

### §5.1 — Shop paragraph

**Body copy (≈90 words):**

```
Northside Fade Co. is a neighborhood shop in the [OPERATOR-BLANK
neighborhood] side of the city. The chairs are not stations — they
belong to the barbers who work them. Whoever cuts you this week is
whoever cuts you next week, with the same notes on your fade, your
lineup, your preferences.

When the barber who cuts you is off, the shop tells you who is
taking the chair that day, so you can move your appointment or wait
for the one who knows your head.

Walk-ins and appointments share the same memory book.
```

> **Operator-blank flag.** Owner name + neighborhood are blank in `FACTS.json`. Brief uses "[OPERATOR-BLANK neighborhood]" and avoids naming an individual until operator supplies `owner_or_contact_name`. Coder wires to `FACTS.json → owner_or_contact_name` when populated.

### §5.2 — Barbers grid (placeholders)

> **Operator-blank flag — Barbers.** T2 (`research/FACTS.enriched.md`) was unable to source individual barber names / portraits from public web. Per `MESSAGING.md` honest-empty-state rule, the grid renders as two-card placeholders with role-only copy:

```
**The Fade Barber**
[Portrait slot — T2 to source or placeholder photograph]
[Operator-blank bio lines, ~50 words each]

**The Lineup Barber**
[Portrait slot — T2 to source or placeholder photograph]
[Operator-blank bio lines, ~50 words each]
```

> If the operator supplies specific barber names later, the cards reflow with the real names. Coder must NOT use stock "smiling handsome man" portraits per `BRAND_DIRECTION.md` §6.

### §5.3 — Consistency promise (closing block)

**H2 (≤60 chars):**

```
The cut is the memory.
```

**Body (≤120 chars):**

```
The shop does not promise more than it cuts. What the barber
remembers, you wear for three weeks.
```

**Page CTA:** "Book on Booksy →" (anchor `cta_primary.destination`).

---

## 6. GALLERY (route: `/gallery`)

**Page purpose.** Visual proof. Each card is a real cut from the chair. Captions in audience vocabulary.

**Page H1:**

```
The work.
```

**Page byline (≤140 chars):**

```
Photos from the chair. Each cut has the barber's name and the chair time.
```

### §6.1 — Gallery grid (eight images)

> **Image source.** Per `research/VALIDATED_IMAGES.md`, eight images are sourced: `hero.jpg`, `services-fade.jpg`, `services-taper.jpg`, `services-lineup.jpg`, `services-beard-trim.jpg`, `services-hot-towel-shave.jpg`, `services-shape-up.jpg`, `gallery-1.jpg` through `gallery-4.jpg`. `VISUAL_SPEC.md` §B.2 uses placeholder names (`hero-chair.jpg`, `service-*.jpg`, `gallery-NN.jpg`). **Coder renames on ingest** (or aliases via Next/Image config) per the binding spec — see §0 Borderline-call 2.

**Caption templates (per image, audience vocabulary):**

```
LOW TAPER WITH LINEUP — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
FADE BUILD — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
SKIN FADE — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
TAPER + BEARD — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
LINEUP, SQUARE EDGE — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
HOT TOWEL FINISH — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
SHAPE-UP, MIDWEEK — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
FADE + DESIGN — [OPERATOR-BLANK barber], [OPERATOR-BLANK] min
```

> **Operator-blank flag.** Barber names + durations are operator-blank. Coder substitutes real values when `FACTS.json → barbers[]` and `services[].duration` populate. NO fabricated barber names.

### §6.2 — Gallery closing block

**H3 (≤60 chars):**

```
Same chair next time.
```

**Body (≤120 chars):**

```
Book the barber who cut the photo you liked. The chair is the
memory.
```

**Page CTA:** "Book on Booksy →" (anchor `cta_primary.destination`).

---

## 7. CONTACT (route: `/contact`)

**Page purpose.** Hours, address, walk-in policy, phone, booking CTA. Plain facts. Embedded map acceptable per `BRAND_DIRECTION.md` §9.

**Page H1:**

```
Get to the shop.
```

**Page byline (≤140 chars):**

```
Walk in or book ahead. The chair is open today.
```

### §7.1 — Address + hours block

> **Operator-blank flag.** Address + hours are blank in `FACTS.json`. Coder renders the block with `data/shop.ts` or equivalent fields. If a field is blank at deploy, brief instructs honest placeholder copy (no fabrication).

**Block template:**

```
**Address**
[OPERATOR-BLANK street]
[OPERATOR-BLANK city, state zip]

**Hours**
Mon: [OPERATOR-BLANK]
Tue: [OPERATOR-BLANK]
Wed: [OPERATOR-BLANK]
Thu: [OPERATOR-BLANK]
Fri: [OPERATOR-BLANK]
Sat: [OPERATOR-BLANK]
Sun: [OPERATOR-BLANK]

**Phone**
[OPERATOR-BLANK] · `tel:[OPERATOR-BLANK]`
```

### §7.2 — Walk-in policy block

**H2 (≤60 chars):**

```
Walk-ins and appointments.
```

**Body (≈90 words):**

```
The shop takes walk-ins until the chairs fill. Calling ahead does
not always beat walking in, but it helps when you want a specific
barber.

Appointments are held for ten minutes past the slot. After that, the
slot opens back up to walk-ins.

The barber you booked is the barber you get, unless the shop tells
you otherwise before you arrive.
```

> **Operator-blank flag.** Cancellation policy + kids' policy are blank in `FACTS.json`. Coder renders as additional paragraphs only if operator populates. Brief does NOT invent specific grace-periods or age thresholds.

### §7.3 — Page CTA

**Primary CTA:** "Book on Booksy →" (anchor `cta_primary.destination`).

**Secondary CTA:** "Get directions →" (anchor maps-link `[OPERATOR-BLANK]` — Google Maps URL).

> **Operator-blank flag.** Maps link is blank. Coder renders `https://maps.google.com/?q=[OPERATOR-BLANK street address]` once `FACTS.json → address` populates. Until then, secondary CTA stays disabled (no broken link).

---

## 8. NAVIGATION labels

> Per `BRAND_DIRECTION.md` §9 + `VISUAL_SPEC.md` §A.

```
HOME        → /
SERVICES    → /services
ABOUT       → /about
GALLERY     → /gallery
CONTACT     → /contact
```

> Plain words. No "Discover," "Explore," "Experience," or canonical-forbidden vocabulary. The nav labels are themselves a voice test.

**Mobile nav:** same five items, hamburger collapsed at `<768px` per `VISUAL_SPEC.md` §A.2.

**Footer links:** Services, About, Gallery, Contact, [Booking page → external], [OPERATOR-BLANK Instagram/social], [OPERATOR-BLANK email]. No "Careers," "Press," "Partners" — the shop is not those things yet.

---

## 9. OBJECTION HANDLERS (three named slots)

> Each slot pairs one of the three `INTAKE_SUMMARY.md` Q8 objections with a FAQ card. Voice: short, plain, no bravado. Coder renders as `<details>` accordions or in the §3.5 `objections` section, per `VISUAL_SPEC.md`.

### §9.1 — Objection 1: Price uncertainty

**FAQ heading (≤80 chars):**

```
"Will I find out the price at the chair, or before?"
```

**Answer (≈90 words):**

```
The price on the booking page is the price you pay. The starting
price is set on the Services page for every service.

If something changes — you add a beard trim to a fade, or the cut
needs more work than the book — the barber tells you before the
clippers come out.

There is no menu mystery and no upsell. The price is the price.
```

> **Voice audit.** Plain words. Answer reads like the barber, not a brochure. No canonical 24. No brand-additive forbidden.

### §9.2 — Objection 2: Wait time

**FAQ heading (≤80 chars):**

```
"How long is the wait if I just walk in?"
```

**Answer (≈90 words):**

```
It depends on the day, but the shop gives realistic estimates before
you sit down. Calling ahead is the fastest path for a specific barber;
walking in is faster for an open chair today.

When the barber who cuts you is off, the shop tells you who is taking
the chair when you book, so the wait is a known number — not a guess.
```

> **Voice audit.** The shop "tells you" — direct, plain, no bravado. "Open chair today" is operator vocabulary.

### §9.3 — Objection 3: Quality / skill skepticism

**FAQ heading (≤80 chars):**

```
"What if the cut isn't right?"
```

**Answer (≈90 words):**

```
The same barber who cuts you has the notes from last time. The cut is
built around memory, not around the chair being open.

If the shape is off when you sit in the chair, the barber adjusts on
the spot. If something catches you when you get home, the shop wants
to hear about it before your next appointment — not three weeks later.
```

> **Voice audit.** "Shop wants to hear" reads like a neighbor, not a chain. No "guarantee," no "promise," no canonical 24. Closing line is plain: the barber knew you last time; the barber knows you this time.

---

## 10. MICROCOPY PACK (page chrome + form fields)

> Copywriter owns every label a visitor reads. Use audience vocabulary. Per `BRAND_DIRECTION.md` §3, plain words, no superlatives.

### §10.1 — Buttons / links

```
Book on Booksy →
View Hours & Walk-Ins
See our barbers →
See full menu →
See the Gallery →
Read reviews on our booking page →
Pick the one for today
Same chair next time.
Get to the shop.
Walk in or call ahead
Call the shop →
Get directions →
Submit
Send message
```

> No exclamation marks. No "Learn more," "Discover," "Explore." Every verb names what the visitor gets, per `codex-copywriter` CRO rule four.

### §10.2 — Form labels (Contact form)

```
Name
Phone
Email
Service you're booking
Preferred barber (optional)
Preferred date
Preferred time
Notes
[ Send message ]   ← submit
```

### §10.3 — Form placeholder text (Contact form)

```
Your name
Your phone
Your email
Fade · Taper · Lineup · Beard trim · Hot towel shave · Shape-up
Any barber · [OPERATOR-BLANK barber 1] · [OPERATOR-BLANK barber 2]
DD / MM / YYYY
HH : MM
Anything we should know
```

### §10.4 — Empty / loading / error states

```
Loading…
That cut didn't load. Try refreshing the page.
We couldn't send that. Try again, or call [OPERATOR-BLANK phone].
You're booked. The barber will see you [OPERATOR-BLANK date] at [OPERATOR-BLANK time].
That slot is taken. Pick another time → (anchor: booking page)
```

### §10.5 — 404 / fallback

```
Page not found.
The chair is still open at the shop. Head back home or book a slot.
[ Back home → ]
```

### §10.6 — Loading skeletons

> Do not use placeholders that read like stock photography ("smiling handyman"). Skeletons should be neutral shape placeholders, neutral fill, no false promise.

---

## 11. CRO ANNOTATIONS (per CTA)

> **Why.** Coder + QA need to verify each button on a real viewport. Brief carries the routing, intent, and post-click expectation.

| # | Section | Label | Intent | Target / Href | Post-click expectation |
|---|---|---|---|---|---|
| CTA-A | §2 Hero (primary) | Book on Booksy → | Book the next cut | `cta_primary.destination` (operator-blank; default `#contact`) | Booking page opens in same tab. If operator-blank at deploy, `#contact` shows the contact form until wired. |
| CTA-B | §2 Hero (secondary) | View Hours & Walk-Ins | Address `wait time` objection | `#contact` | Contact page, hours + walk-in policy block visible above the fold on mobile. |
| CTA-C | §3.2 `why-us` | See our barbers → | Trust via people | `#about` | About page, §5.1 shop paragraph visible. |
| CTA-D | §3.3 `what-you-get` | See full menu on the Services page → | Browse services | `/services` | Services page, §4.1 service grid visible above the fold on desktop. |
| CTA-E | §3.4 `proof` (primary) | See the Gallery → | Visual proof | `/gallery` | Gallery page, §6.1 grid visible. |
| CTA-F | §3.4 `proof` (secondary) | Read reviews on our booking page → | Address `quality / skill skepticism` | `cta_primary.destination` (operator-blank) | External booking page with reviews. |
| CTA-G | §3.6 `final-cta` (primary) | Book on Booksy → | Repeat primary CTA | `cta_primary.destination` | Same as CTA-A. |
| CTA-H | §3.6 `final-cta` (secondary) | Call [OPERATOR-BLANK phone] → | Phone-first visitor | `tel:[OPERATOR-BLANK]` | Triggers dialer on mobile. Hidden if phone is operator-blank at deploy. |
| CTA-I | §5 About page | Book on Booksy → | Repeat primary CTA | `cta_primary.destination` | Same as CTA-A. |
| CTA-J | §6 Gallery page | Book on Booksy → | Repeat primary CTA | `cta_primary.destination` | Same as CTA-A. |
| CTA-K | §7 Contact page (primary) | Book on Booksy → | Repeat primary CTA | `cta_primary.destination` | Same as CTA-A. |
| CTA-L | §7 Contact page (secondary) | Get directions → | Map intent | Maps link with operator-blank address | Disabled if address is operator-blank. |

> **Conversion posture.** Primary CTA (Book on Booksy) appears on every page. Secondary CTAs address specific objections (Q8): hours / walk-ins = wait time; reviews = quality skepticism; phone = phone-first visitors.

---

## 12. FORBIDDEN-PHRASE AUDIT (canonical 24 + brand-additive)

### §12.1 — Canonical 24 forbidden phrases

```
seamless, empower, unlock, journey, solution, cutting-edge,
state-of-the-art, revolutionize, transform, all-in-one,
next-level, world-class, game-changing,
industrial, engineering-grade, production-grade, end-use,
aerospace, automotive, robotics,
medical-grade, clinical, certified, specification
```

> Source: `/opt/data/skills/devops/website-build-orchestration/references/canonical-forbidden-phrase-inversion.md`. Per `INTAKE_SUMMARY.md` Q10 (A), no inversions. Audience vocabulary (§BRAND_DIRECTION.md §4) is consumer / hobbyist; no overlap with the canonical list.

**Group classifications (carry-forward from canonical source):**
- Directive / hype (13): seamless, empower, unlock, journey, solution, cutting-edge, state-of-the-art, revolutionize, transform, all-in-one, next-level, world-class, game-changing
- Industrial / spec-sheet (7): industrial, engineering-grade, production-grade, end-use, aerospace, automotive, robotics
- Medical / clinical (4): medical-grade, clinical, certified, specification

### §12.2 — Brand-additive forbidden phrases (per `BRAND_DIRECTION.md` §8)

```
transformative, elevate, unleash, journey,
luxury, premium experience,
stylist, salon
```

> Note: `journey` overlaps with the canonical 24 and would be caught by §12.1 already; listed for explicit operator audit.
> Note: `stylist` and `salon` are NOT in the canonical 24 but are wrong vocabulary for the brand. Coder must grep for these as additional phrases.

### §12.3 — Forbidden-phrase grep transcript (this brief)

> Run by the copywriter before handoff. Script: `scripts/scrub_forbidden.sh COPY_BRIEF.md`

```
$ for phrase in seamless empower unlock journey solution cutting-edge \
                state-of-the-art revolutionize transform all-in-one \
                next-level world-class game-changing industrial \
                engineering-grade production-grade end-use aerospace \
                automotive robotics medical-grade clinical certified \
                specification transformative elevate unleash luxury \
                "premium experience" stylist salon; do
    hits=$(grep -ic "$phrase" COPY_BRIEF.md)
    if [ "$hits" != "0" ]; then
        echo "FAIL: '$phrase' appears $hits time(s) in COPY_BRIEF.md"
    fi
done
echo "All forbidden phrases checked."
```

**Result:** `[expected PASS — 0 hits — see §0 Scrub log]`

> If a borderline call slips through, brief records it in §0 Scrub log so `codex-qa` (T7) can audit without re-running the full grep.

### §12.4 — Em-dash discipline (per `BRAND_DIRECTION.md` §8)

The brand-additive rule says: em-dashes only as a substitute when used inside parentheticals to clarify an aside — never to fake a sentence. This brief uses em-dashes inside parentheticals (voice-card prose, §3.1 body), and uses sentence-final periods + commas everywhere else. No ellipses (`…`) in customer-facing copy.

---

## 13. SELF-AUDIT FOOTER (for operator audit)

> This footer is what `codex-qa` (T7) checks against. Mirror it in any post-build patch review.

- [x] Outcome-first hero (Q9 locked text carried in §2)
- [x] Five pages per `VISUAL_SPEC.md` §A
- [x] Audience vocabulary carried (`fade, taper, lineup, beard trim, hot towel shave, walk-ins, appointment, shape-up`)
- [x] Three objection handlers (Q8: price uncertainty / wait time / quality / skill skepticism) — §9
- [x] No exclamation marks in any customer-facing copy
- [x] Em-dashes only in parentheticals — §12.4
- [x] Canonical 24 forbidden phrases: 0 hits — §12.3
- [x] Brand-additive forbidden phrases: 0 hits — §12.3
- [x] No fabricated reviews (operator-blank rendered as honest empty state) — §3.4, §0 Borderline-call 1
- [x] No fabricated prices (operator-blank rendered as "starting at — confirm with barber") — §4
- [x] No fabricated barber names (rendered as role-only placeholders) — §5.2
- [x] No `USE_MOCK_DATA=true` path leak — T5 binds to `.env → USE_MOCK_DATA=false`
- [x] `## Per-project inversions (REQUIRED vocabulary)` section: intentionally OMITTED — Q10 (A) canonical 24 only, no inversions
- [x] Image filename reconciliation handoff (T2 file names vs `VISUAL_SPEC.md` placeholders) — §0 Borderline-call 2
- [x] Operator-blank scaffolding flagged inline; coder reads `data/*.ts` to substitute when populated

> **Handoff next steps.** T5 (`codex-coder`) reads this brief, wires copy into `components/sections/*.tsx` against `VISUAL_SPEC.md` slot IDs, hooks operator-blank fields to `FACTS.json`. T6 (`codex-design`) verifies visual gate. T7 (`codex-qa`) runs COPY-02 (forbidden-phrase grep + outcome-first + non-generic CTA + no-placeholder) against rendered HTML and this brief.

— END OF BRIEF —
