# Northside Fade Co. — Brand Direction

> Advisory context for the copywriter, coder, and visual gate. The binding contract is `VISUAL_SPEC.md`. Trace every decision here back to `FACTS.json` or `INTAKE_SUMMARY.md` (callouts inline).

## 1. Positioning Statement

Northside Fade Co. is the **trusted neighborhood barbershop** for people who want the same sharp cut every visit — no guesswork, no surprises, no hidden waits.

We serve walk-ins and appointments in equal measure. We are the shop where the work is consistent enough that customers stop thinking about who cuts their hair and start thinking about where to go after.

## 2. Brand Pillars

Three pillars hold the site together. Every page should reinforce at least one.

1. **Consistency you can count on.** Same barber, same cut, same result. This is the promise behind the hero outcome (INTAKE_SUMMARY → Q9: *"After using this service, I finally have a cut I can trust every visit."*).
2. **Respect for your time.** Walk-ins welcome, appointments held, no hidden waits. Addresses the *wait time* objection (FACTS.json → objections[1]).
3. **Skilled, no-ego craft.** Trained barbers who care about fades, tapers, lineups, beard trims, and hot towel shaves. Addresses *quality / skill skepticism* (FACTS.json → objections[2]).

## 3. Tone of Voice

**Warm, direct, masculine without being loud.** Write like the best barber on the chair: friendly, professional, never salesy.

Voice attributes:
- **Confident, not cocky.** State what we do without superlatives.
- **Plain words, used precisely.** "Fade" not "precision gradient haircut." (See §4.)
- **Outcome-focused.** Lead with what the customer gets, not what is on the menu.
- **Quiet authority.** The shop speaks for itself; we do not oversell.

What this sounds like:
- *"Walk in, sit down, walk out looking like yourself — just sharper."*  (✓)
- *"Unleash the power of transformative grooming experiences."*  (✗ — canonical forbidden)

## 4. Audience Vocabulary

Use the operator-confirmed vocabulary (FACTS.json → audience_vocabulary) wherever it fits: **fade, taper, lineup, beard trim, hot towel shave, walk-ins, appointment, shape-up**.

These are the words the audience already uses. Substituting softer terms (*"haircut"*, *"trim"*) flattens the brand and loses the credibility signal. Use them in service names, gallery captions, FAQ headings, and nav.

## 5. What Makes Us Distinct

What separates Northside Fade Co. from chain salons, discount shops, and luxury spas:

| Them | Us |
|------|-----|
| Walk-in roulette — different barber, different cut | Same-barber consistency or documented style notes |
| Surprise pricing | Clear starting-at prices on the Services page (no menu mysteries) |
| "Your stylist will be right with you" (45 min later) | Realistic wait-time framing and a booking-first CTA |
| Beauty-spa aesthetic | Working-shop aesthetic, modern and clean |
| Stylist terminology | Barber terminology (we have barbers, not stylists) |

## 6. Visual Mood

**Modern minimalist barbershop** (INTAKE_SUMMARY → Q4: B). Translates to:

- **Palette:** warm cream + deep terracotta accent on near-black. Grounded, masculine, warm without being vintage.
- **Type:** sharp geometric display (Cabinet Grotesk) paired with quiet, legible body (Inter). Display does the talking; body does the reading.
- **Imagery:** real barbershop photography — chairs, clippers, fades mid-cut, the shop interior. No stock *"handsome man smiling"* portraits. Honest, not aspirational.
- **Motion:** restrained. Subtle fades and lifts on hover, no bouncing or spinning. The work is precise; the motion should be too.
- **Layout:** generous whitespace, editorial rhythm. Sections breathe. The page should feel like a well-set barbershop — clean, ordered, with the work visible.

Mood references (text only — researcher should source similar vibes):
- **Aesop retail stores:** warm minimalism, restrained type, considered materials.
- **Saturdays NYC:** editorial barbershop aesthetic, clean sans pairing, photographic focus.
- **Fellow Barber:** modern shop photography, confident copy, terracotta-and-charcoal palette.

## 7. Objections We Answer

From FACTS.json → objections, in order:

1. **Price uncertainty** — addressed on the Services page with explicit starting-at figures and a *"what affects your price"* note. No menu mysteries.
2. **Wait time** — addressed on Home and Contact with hours, walk-in policy, and an appointment-first CTA. State realistic expectations rather than promising *"no wait."*
3. **Quality / skill skepticism** — addressed via the Gallery (real work, not stock) and a Reviews section on Home. Show, do not tell.

## 8. Words and Phrases to Avoid

The canonical 24 forbidden-phrase list applies (INTAKE_SUMMARY → Q10). On top of the canonical list, the brand-side additions are:

- *"Transformative,"* *"elevate,"* *"unleash,"* *"journey"* — overused and incompatible with the craft tone.
- *"Luxury,"* *"premium experience"* — out of register; the shop is modern and skilled, not spa-coded.
- *"Stylist"* — wrong job title. We have **barbers**.
- *"Salon"* — wrong word. We are a **barbershop / shop**.
- Em-dashes used as a substitute for a clear sentence. Use plain sentences.

These are **additive** to the canonical list, not replacements. The copywriter owns the canonical list and merges.

## 9. Page-Level Notes (multi-page site, INTAKE_SUMMARY → Q2)

The site has five pages; brand voice and visual system apply across all of them.

- **Home** — hero (outcome-first headline), proof block (reviews), teasers to Services and Gallery, FAQ, final CTA. Mirrors the 8-section landing structure (see VISUAL_SPEC.md → SECTION D).
- **Services** — every service as a card: name, what is included, duration if known, starting-at price, *"Book this service"* CTA. Each card uses audience vocabulary.
- **About** — the shop, the barbers (placeholders — researcher fills from FACTS.json → owner_or_contact_name when sourced), and the consistency promise in human terms.
- **Gallery** — photographic grid of cuts, organized by service type if possible. Captions use audience vocabulary (e.g. *"Low taper with lineup — Marcus, 30 min"*).
- **Contact** — address, hours, phone, walk-in policy, booking CTA. Embedded map is acceptable.

## 10. Tracing Back to FACTS.json

Decisions in this file reference:

- `FACTS.json → business_name` — brand naming throughout
- `FACTS.json → audience_vocabulary` — vocabulary list (§4)
- `FACTS.json → objections` — objection coverage (§7)
- `INTAKE_SUMMARY.md → Q2` — multi-page structure (§9)
- `INTAKE_SUMMARY.md → Q4` — modern minimalist aesthetic (§6)
- `INTAKE_SUMMARY.md → Q9` — hero outcome (§2)
- `INTAKE_SUMMARY.md → Q10` — forbidden-phrase policy (§8)
- `INTAKE_SUMMARY.md → Q11` — asset sourcing (none provided; researcher sources)
