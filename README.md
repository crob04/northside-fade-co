# Northside Fade Co.

A static multi-page site for Northside Fade Co. — a neighborhood barbershop
where the cut is the same every visit.

Five routes:
- `/` — Home
- `/services` — Services
- `/about` — About
- `/gallery` — Gallery
- `/contact` — Contact

The build reproduces every block of `COPY_BRIEF.md` verbatim, against the
design tokens in `VISUAL_SPEC.md`, with images from `research/images/`.

---

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3010 (the script pins a free port — 3010, not 3000,
to avoid colliding with the Hermes workspace container).

To smoke-test:

```bash
npm run build         # static export → ./out/
npm run start         # serve the export at :3010
curl -s http://localhost:3010/ | head -50
```

The `next.config.js` is configured for `output: "export"`, so the build emits a
fully static site under `out/` — no Node runtime required at deploy time.

## Deploy

Vercel serves the static export directly:

```bash
npx vercel deploy --prod
```

The repo URL is `https://github.com/crob04/northside-fade-co`. Vercel auto-detects
Next.js; the `output: "export"` configuration produces a `BUILD` step that
emits the `out/` directory, which Vercel serves from the edge.

CI / Vercel will pick up pushes to `main`. The first deploy assigns a
`<slug>.vercel.app` URL automatically; custom domain is operator work.

## Lint, type-check, scrub

```bash
npm run lint       # eslint (Next.js preset)
npm run scrub      # forbidden-phrase scrub (canonical 24 + brand-additive)
```

`scripts/scrub-forbidden.sh` greps `.tsx`, `.ts`, `.mdx`, `.md`, and `.html`
files for the canonical 24 forbidden phrases + brand-additive additions
(`transformative`, `elevate`, `unleash`, `luxury`, `premium experience`,
`stylist`, `salon`). Exits non-zero on any hit.

The rendered build is also checked by running the scrub against the
`out/` directory after `npm run build`.

## Source-of-truth files

| File                              | Purpose                                                |
|-----------------------------------|--------------------------------------------------------|
| `BRAND_DIRECTION.md`              | Brand pillars, tone, vocabulary, what-to-avoid         |
| `VISUAL_SPEC.md`                  | Tailwind tokens, components, sections, 30 QA checks    |
| `COPY_BRIEF.md`                   | Locked copy — every block verbatim                      |
| `research/VALIDATED_IMAGES.md`    | Sourced image manifest (10 stock images)               |
| `research/FACTS.enriched.md`      | Operator-supplied facts + [OPERATOR-BLANK] defaults    |
| `data/copy.ts`                    | Single source of truth for customer-facing copy        |
| `data/services.ts`                | Six-card service data with operator-blank prices       |
| `data/shop.ts`                    | Address / hours / phone (operator-blank)               |
| `data/reviews.ts`                 | Empty state — no fabricated reviews                     |
| `lib/forbidden-phrases.ts`        | Canonical 24 + brand-additive blocklist                 |

## Stack

| Layer       | Choice                                  |
|-------------|-----------------------------------------|
| Framework   | Next.js 14 App Router (static export)   |
| Language    | TypeScript                              |
| Styling     | Tailwind CSS 3.4 (tokens per VISUAL_SPEC) |
| Fonts       | Cabinet Grotesk (Fontshare) + Inter (Google Fonts) |
| Images      | Local under `public/images/` (no hotlinks) |
| Hosting     | Vercel                                  |

## Project layout

```
app/
  layout.tsx            # Fonts, theme bootstrap, nav, footer
  globals.css           # Tailwind directives + reduced-motion
  page.tsx              # Home (8 sections per VISUAL_SPEC §D.1)
  services/page.tsx
  about/page.tsx
  gallery/page.tsx
  contact/page.tsx
  not-found.tsx
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
components/
  nav.tsx               # Sticky nav + mobile drawer (C.3)
  footer.tsx
  dark-mode-toggle.tsx  # (C.10) — hydration-safe, localStorage-persisted
  sections/
    home-hero.tsx
    home-problem.tsx
    home-why-us.tsx
    home-what-you-get.tsx
    home-how-it-works.tsx
    home-proof.tsx
    home-faq.tsx
    home-final-cta.tsx
data/
  copy.ts               # Locked copy (single source of truth)
  services.ts
  shop.ts
  reviews.ts
lib/
  forbidden-phrases.ts  # Canonical 24 + brand-additive
public/
  images/               # 10 sourced images, no hotlinks
scripts/
  scrub-forbidden.sh    # Build-time + render-time phrase guard
tailwind.config.ts      # brand + brand-dark palettes (SECTION A verbatim)
```

## Operator follow-ups still needed

The build is intentionally shippable without operator input. The following fields
render as honest placeholders and need operator-supplied values to fill:

1. **Shop address (street + city/state/zip).** Both render as
   *confirm with operator*. Update `data/shop.ts`.
2. **Shop phone.** Renders as *confirm with operator*. Update `data/shop.ts`.
3. **Shop hours (Mon–Sun).** Renders as *confirm with shop* per row. Update
   `data/shop.ts` or pass through the Contact page.
4. **Shop email** (for the contact form's `mailto:` action). Currently
   unset, so the form renders with no action and a code-side note explaining
   the mailto behavior. Update `app/contact/page.tsx`.
5. **Booking provider URL.** The primary CTA *Book on Booksy →* wires to
   `/contact` until the operator's booking URL is supplied. Update
   `data/shop.ts` → `bookingProvider.destination`, then pipe through the
   primary CTA hrefs in `data/copy.ts` (Home, Services, About, Gallery,
   Contact CTAs).
6. **Barber names + bios.** About page renders role-only placeholders
   ("The Fade Barber", "The Lineup Barber") with operator-blank bio lines.
   Update `data/copy.ts` → `ABOUT_PAGE.barbers` with real names + bios.
7. **Service prices + final duration.** Services cards render *Starting at —
   confirm with barber.* Update `data/services.ts` when the operator
   confirms pricing.
8. **Operator-supplied photos.** All hero / services / gallery / about images
   are stock (Pixabay + Pexels). The researcher left an open question in
   `research/VALIDATED_IMAGES.md` for real storefront + barber team photos
   when available.
9. **Custom Vercel domain.** Operator owns the DNS cutover once they're ready
   to point a real domain at the build.
10. **Reviews.** Empty today — the Home PROOF block links out to the
    booking page where reviews live. When the operator pulls real review
    quotes or a verified Booksy/Google URL, populate
    `data/reviews.ts` and update the Home PROOF section to render cards.

## Acceptance criteria met

- Five routes (`/`, `/services`, `/about`, `/gallery`, `/contact`) all live
  and linked in nav + footer.
- All `COPY_BRIEF.md` blocks rendered verbatim — no rewrites, paraphrases,
  or AI-improvised copy.
- All `VISUAL_SPEC.md` SECTION A tokens implemented (Tailwind config;
  verified by `grep -E "#(C2410C|E2623A|F7F4EF|13110F)" tailwind.config.ts`).
- All SECTION A–E visual specifications honored (design tokens, layout,
  section ordering, image slots).
- Form uses `mailto:` — no backend in scope; operator-side wiring flagged in
  README.
- Honest placeholders everywhere `FACTS.json → *` is blank (address, hours,
  phone, email, barber names, prices).
- Per-page `<title>`, meta description, og:image (single OG image shared
  across routes — replace with a custom one if operator supplies).
  `sitemap.xml` and `robots.txt` generated by Next.js at `/sitemap.xml` and
  `/robots.txt`.
- `npm run build` emits `out/` static export (Lighthouse-clean — no
  external image domains, no console errors, no broken links, no missing
  alt text).

## VERIFY

After deploying, smoke-test:

```bash
curl -sSI https://northside-fade-co.vercel.app/ | head -1     # 200
curl -s https://northside-fade-co.vercel.app/ | grep -c "cut you can trust"   # > 0
bash scripts/scrub-forbidden.sh out/                         # PASS
```

The site is Vercel-deployable as-is.
