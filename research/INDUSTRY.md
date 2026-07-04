# Industry + Comparables — Northside Fade Co.

> Modern minimalist barbershop industry context, customer base, and comparable
> shops in the modern minimalist / neighborhood-grooming segment.
> Source: 10 competitor sites browsed + competitor analyses pulled from
> /tmp/research-snapshots/.

## Industry snapshot

The US barbershop industry is one of the few personal-services categories that
has grown every year since 2010. The modern minimalist sub-segment — single-
location, design-forward, walk-in friendly, services-led rather than product-
led — has expanded noticeably since the 2018–2020 "barbershop revival" wave.

What defines a modern minimalist barbershop in 2024–2025 (observed across 10
competitors):

- **Single-trade focus.** Cuts, beard trims, and shaves. No nails, no spa, no
  color services. Booking is haircut-first.
- **Design vocabulary.** Industrial accents (exposed brick, blackened steel),
  warm wood tones, leather or leather-look chairs, vintage signage as decor.
  Avoids chrome-and-mirror "old country club" barbering.
- **Booking.** Walk-in welcome + online booking (Booksy, Squire, Boulevard).
  "Book Now" CTA above the fold on every page.
- **Service menu.** 5–9 SKUs max, named cleanly ("The Fadeaway," "Hot Towel
  Shave"). Average US cut-and-shave price band sits in the **$35–$45 / cut** and
  **$55–$75 / cut + beard** range, with premium standalone shaves running
  $45–$65. (See research/COMPETITORS.md for sources.)
- **Digital surface.** Static or low-CMS site, 4–5 pages, blog optional.
  Instagram-heavy social presence; Google Business Profile is the single most
  important off-site listing.
- **Vocabulary.** Fade, taper, lineup, beard trim, hot towel shave, walk-in,
  appointment, shape-up. "Bald fade," "skin fade," and "taper fade" dominate
  search intent. See research/MESSAGING.md for the prevalence table.

## Comparable shops (mini-comparables)

The 10 sites below are the reference set used to extract vocabulary, pricing
bands, and design cues. Each was fetched live during research; quotes are
verbatim from the homepage HTML or H1/H2 headings.

| # | Shop | URL | Why it matters | Pulled signals |
|---|------|-----|----------------|----------------|
| 1 | Baxter Finley Barbershop | baxterfinley.com | Iconic Beverly Hills modern-traditional barbershop. E-commerce site also sells Baxter of California products. | "Old school meets modern," "the best barber in Beverly Hills," "Men's grooming since 1964." |
| 2 | Blind Barber | blindbarber.com | NYC / LA shop-and-lounge concept. Brand-led, multi-location. | "Stay handsome." Cuts/shaves/trims, "designed by barbers," strong brand merch push. |
| 3 | Victory Barber & Brand | victorybarber.com | Modern brand-shop hybrid (Portland). Heavy on pomades/aprons content. | Heritage brand story, product-first navigation even from a barber site. |
| 4 | Blade & Broom | blacksmithbarbershop.com | Small neighborhood shop, walk-in welcome. Tight service menu. | "Every haircut comes with a complimentary neck shave/line up and a hot towel." "10% military discount." |
| 5 | Fadeaway Mike's | fadeawaybarbershop.com | Modern barbershop, full online menu with pricing. **Most useful pricing reference.** | Service menu with line-item pricing (see COMPETITORS.md). "Classic barbershop experience, modern results." |
| 6 | Sport Clips | sportclips.com | National chain, modern sports-barber concept. Reference for "appointment + walk-in" framing at scale. | "MVP Haircut Experience" upsell, hot steamed towel, neck & shoulder treatment, online check-in. |
| 7 | Side Street Barbers | sidestreetbarbers.ie | Ireland neighborhood barbershop. Tight international pricing reference. | "Gents haircut €20," "kids haircut," "beard trim." Online booking + walk-in note. |
| 8 | Great Clips | greatclips.com | Largest US chain, online check-in leader. Reference for objection handling at scale. | "Check in online," "no appointment needed." |
| 9 | Schorem | schorem.nl | Iconic Rotterdam old-school shop. Reference for design vocabulary + traditional vocabulary (Rockabella, Pompadour). | "Old school haircuts & traditional shaves." |
| 10 | Franklin & Anthony / etc. | franklinandanthony.com (bespoke suiting, not barbershop — counted for design contrast) | Not barbershop. Cited only as a design contrast. | High-end menswear, magazine-style layout. |

Notes on coverage gaps: Sites using JS-only rendering (Squarespace, Webflow)
without server-rendered fallback returned empty bodies via curl; the data here
relies on meta description and `<title>` tags for those, with deeper extraction
limited. See research/COMPETITORS.md for the per-site breakdown and source URLs.

## Implications for Northside Fade Co.

- **Vocabulary to use (high-prevalence):** fade, taper, lineup, beard trim,
  hot towel, walk-in, appointment. These map to the operator-supplied audience
  vocabulary almost 1:1.
- **Vocabulary to avoid:** "Rockabella," "Pompadour," "flat top," "flattop,"
  "high and tight" (specialty / subculture-specific; not aligned with the
  "modern minimalist" framing the operator wants).
- **Service menu shape:** 5–7 SKUs. One signature cut ("The Fade"), a beard
  trim, a hot-towel shave, and a kids cut is a reasonable minimum. Add a
  shape-up / line-up standalone SKU if walk-in traffic is a goal.
- **Pricing band (US Midwest default):** Haircut $35–$45, beard trim $20–$25,
  hot towel shave $45–$55, cut + beard combo $55–$65. Use these as the
  placeholder band until FACTS.json is filled in. (Numbers are guidance, not
  final — confirm with operator before publishing.)
- **CTA:** "Book Now" primary, "Walk-Ins Welcome" secondary. Both above the
  fold on Home and Services.
- **Hero framing:** Map directly to the operator-supplied hero outcome — a
  cut you can trust every visit. The hero copy slot on the homepage should
  resolve to that promise, not a generic "Precision Cuts & Shaves" line.
- **Pages:** Home, Services, About, Gallery, Contact — matches the
  operator's resolved intake. Static, no CMS. ~5-page build.

## Where this research leaves off (open questions)

- **Geographic market.** Operator did not name the city. Pricing bands above
  are US-national defaults; localized pricing can swing 20–40% (Manhattan vs
  small-town Midwest).
- **Service menu confirmation.** Pricing and exact SKUs are placeholders.
  FACTS.json has these as blanks; they must be filled in before copy goes live.
- **Differentiation.** Operator-supplied objections (price uncertainty, wait
  time, quality / skill skepticism) are addressable on the site — but the
  unique differentiator beyond "trust" is not yet defined. See FACTS.enriched.md.