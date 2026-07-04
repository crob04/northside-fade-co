# Northside Fade Co. — Visual Specification

> **Binding contract** between pre-build design and every downstream worker (`minimax-coder`, `minimax-copywriter`, `codex-qa`, `codex-design` visual gate). If an item is in this file, it is required. If it is not in this file, it is not required. Every SECTION F item is objectively verifiable against the rendered build.

> Brand mood: see `BRAND_DIRECTION.md` §6 (modern minimalist barbershop). All tokens below implement that mood.

---

## SECTION A — Tailwind Config Extension

Complete `tailwind.config.ts` `extend` block. Both light and dark palettes defined; both must be implemented (see §F item 7).

```ts
// tailwind.config.ts — extend block only
extend: {
  colors: {
    brand: {
      bg:          '#F7F4EF',   // warm cream (page background, light mode)
      surface:     '#FFFFFF',   // cards, panels, inputs (light mode)
      text:        '#1A1815',   // primary text — warm near-black
      muted:       '#6B6560',   // secondary text, captions, meta
      border:      '#E5E0D8',   // hairlines, dividers, card borders
      primary:     '#C2410C',   // deep terracotta — CTA fill, link color
      'primary-hover': '#9A330A', // primary on hover / active
      accent:      '#1A1815',   // ink-black for editorial moments (numbers, dividers)
    },
    'brand-dark': {
      bg:          '#13110F',   // near-black warm (page background, dark mode)
      surface:     '#1C1916',   // cards, panels, inputs (dark mode)
      text:        '#EDEAE5',   // primary text — warm off-white
      muted:       '#8A8580',   // secondary text, captions, meta
      border:      '#2A2622',   // hairlines, dividers, card borders
      primary:     '#E2623A',   // brighter terracotta for AA contrast on dark
      'primary-hover': '#F47A52', // primary on hover / active (dark)
      accent:      '#EDEAE5',   // ink-white for editorial moments
    },
  },
  fontFamily: {
    display: ['Cabinet Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    body:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
  borderRadius: {
    sm:  '0.25rem',  // 4px — chips, inline tags
    DEFAULT: '0.5rem', // 8px — buttons, inputs
    md:  '0.75rem', // 12px — small cards
    lg:  '1rem',    // 16px — large cards, panels
    xl:  '1.5rem',  // 24px — hero image, featured panels
  },
  spacing: {
    'section-sm': '4rem',   // 64px — tight sections (FAQ)
    'section-md': '6rem',   // 96px — mid sections (WHY US, WHAT YOU GET, HOW IT WORKS, PROOF)
    'section-lg': '8rem',   // 128px — HERO, FINAL CTA
  },
  boxShadow: {
    card:       '0 1px 2px 0 rgb(26 24 21 / 0.04), 0 1px 3px 0 rgb(26 24 21 / 0.06)',
    'card-hover': '0 4px 12px -2px rgb(26 24 21 / 0.08), 0 2px 6px -1px rgb(26 24 21 / 0.06)',
    nav:        '0 1px 0 0 rgb(26 24 21 / 0.04)',
  },
  maxWidth: {
    container: '76rem',  // 1216px — page max width
    prose:     '42rem',  // 672px — long-form copy column
  },
}
```

**WCAG AA contrast verification** (light mode, audited):
- `brand.text (#1A1815)` on `brand.bg (#F7F4EF)` → 15.6:1 ✓ AAA
- `brand.muted (#6B6560)` on `brand.bg (#F7F4EF)` → 4.8:1 ✓ AA normal text
- `#FFFFFF` on `brand.primary (#C2410C)` → 5.2:1 ✓ AA normal text
- `brand-dark.text (#EDEAE5)` on `brand-dark.bg (#13110F)` → 14.9:1 ✓ AAA
- `brand-dark.muted (#8A8580)` on `brand-dark.bg (#13110F)` → 4.6:1 ✓ AA normal text
- `#13110F` on `brand-dark.primary (#E2623A)` → 5.3:1 ✓ AA normal text

Dark-mode `brand.primary` is intentionally brighter than light-mode — required for AA on the near-black bg.

---

## SECTION B — Font Loading

Insert into `app/layout.tsx` `<head>` (Next.js App Router — `next/font/google` preferred; fallback to `<link>` if `next/font` is unavailable). Both fonts must be self-hosted or loaded via the documented provider CDN — no hotlinking from arbitrary URLs.

**Cabinet Grotesk** (display) — Fontshare (api.fontshare.com):
```html
<link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
<link
  href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap"
  rel="stylesheet"
/>
```

**Inter** (body) — Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Weights loaded:
- Cabinet Grotesk: **400, 500, 700, 800** (display usage is 700–800; 400–500 reserved for editorial accents)
- Inter: **400, 500, 600, 700** (body, captions, UI)

Both must include `display=swap` to avoid FOIT.

---

## SECTION C — Component Specs

Exact Tailwind class strings. Builder must use these verbatim unless a variant is explicitly listed.

### C.1 — Primary CTA button

- **Rest:** `bg-brand-primary text-white font-body font-semibold px-6 py-3 rounded hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text transition-colors duration-200`
- **Hover:** background → `brand-primary-hover`
- **Focus-visible:** 2px outline, `brand.text` color, 2px offset
- **Disabled:** `opacity-50 cursor-not-allowed pointer-events-none`
- **Loading:** swap label to three animated dots, keep button width via `min-w-[8rem]`, set `aria-busy="true"`
- **No gradient. No border. Solid fill only.**
- Touch target: minimum `min-h-[44px]` on mobile.

### C.2 — Secondary / ghost button

- **Rest:** `bg-transparent text-brand-text border border-brand-border px-6 py-3 rounded font-body font-semibold hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text transition-colors duration-200`
- **Hover:** background → `brand.surface` (subtle wash, not a fill flip)
- **Focus / disabled / loading:** same as C.1.

### C.3 — Navigation bar

- **Position:** `sticky top-0 z-40` on every page.
- **Container:** full width, content constrained to `max-w-container mx-auto px-6 md:px-8`.
- **Background:** `bg-brand-bg/80 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/60 border-b border-brand-border`.
- **Scroll state change:** when `window.scrollY > 8`, swap border color from transparent → `brand.border` and add `shadow-nav` (subtle 1px hairline shadow). Implement with one `useEffect` + `useState` or CSS-only `scroll-driven` if Next.js supports it.
- **Right side:** dark-mode toggle + primary CTA (`Book appointment`).
- **Mobile (<768px):** hide the horizontal link list, show a hamburger button that opens a full-screen drawer (translucent, matches nav bg).

### C.4 — Hero section layout

- **Default: NOT centered.** Asymmetric two-column on desktop, single-column on mobile.
- **Desktop (≥1024px) grid:** `grid lg:grid-cols-12 gap-12 items-center`
- **Column split:** left text column spans **7 cols**, right image column spans **5 cols** (image slightly inset). The split reads 7:5, not 6:6.
- **Mobile (<1024px):** single column, image collapses below text, order: text first, image second.
- **Headline:** display font, `text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight`. **Outcome-first** — lead with the customer outcome, not the shop name.
- **Subheadline:** body font, `text-lg md:text-xl text-brand-muted leading-relaxed max-w-prose`.
- **CTA row:** primary + secondary button, stacked on mobile (`flex-col sm:flex-row gap-3`).
- **Padding:** `py-section-lg` (128px top + bottom on desktop; scales down to `py-24` mobile).
- **Image:** `rounded-xl` (24px), `shadow-card`, `aspect-[4/5] object-cover`. No border accents.

### C.5 — Feature / proof section layout

**3-column symmetric grids are FORBIDDEN.** Builder must use one of the following approved layouts per section:

- **2+1 asymmetric:** two cards on top in a `grid md:grid-cols-2 gap-6`, one wider card below in `grid md:grid-cols-3` with the wide card spanning 2 cols. Used for *WHAT YOU GET*.
- **Staggered:** cards offset on the vertical axis via `mt-0`, `md:mt-12`, `md:mt-6` etc. Used for *WHY US*.
- **Full-width-lead:** one wide card on top (`md:col-span-2`), two small cards below in a 2-col grid. Used for *HOW IT WORKS*.
- **Editorial split:** left text + right list, no card grid. Used for *PROOF* (reviews block) — text on left, quote cards on right.

Each section picks one layout. Do not mix within a section.

### C.6 — Card style

- **Border:** `border border-brand-border` (1px, neutral).
- **Radius:** `rounded-lg` (16px) for standard cards, `rounded-md` (12px) for compact cards.
- **Shadow:** `shadow-card` at rest, `shadow-card-hover` on hover.
- **Hover behavior:** shadow lifts + `translate-y-[-2px]`. No color flip on the card body.
- **No colored left-border accent.**
- **No icon-in-colored-circle decoration.** Icons (when used) sit flush-left at `text-brand-primary` size `h-5 w-5`, no background fill, no rounded wrapper.

### C.7 — Section spacing rhythm

Section padding MUST vary. The following values are the spec; do not collapse them to a single value.

| Section | Spacing class (desktop) | Spacing class (mobile) |
|---------|------------------------|------------------------|
| HERO | `py-section-lg` (128px) | `py-24` (96px) |
| THE PROBLEM | `py-section-md` (96px) | `py-20` (80px) |
| WHY US | `py-section-md` (96px) | `py-20` (80px) |
| WHAT YOU GET | `py-section-md` (96px) | `py-20` (80px) |
| HOW IT WORKS | `py-section-md` (96px) | `py-20` (80px) |
| PROOF | `py-section-md` (96px) | `py-20` (80px) |
| FAQ | `py-section-sm` (64px) | `py-16` (64px) |
| FINAL CTA | `py-section-lg` (128px) | `py-24` (96px) |

If two adjacent sections share a value, insert a `border-t border-brand-border` divider between them so the rhythm still reads.

### C.8 — Form inputs (Contact, booking)

- **Input/textarea:** `bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary/40 w-full`
- **Label:** `text-sm font-medium text-brand-text mb-1.5 block`
- **Error state:** border → `border-red-600`, helper text in `text-red-600`.
- **Submit:** uses primary button class (C.1).

### C.9 — Buttons in dark mode

In dark mode, the primary button uses `bg-brand-dark-primary text-brand-dark-bg`. The same hover/focus/disabled rules apply. Ghost button uses `border-brand-dark-border text-brand-dark-text`.

### C.10 — Dark-mode toggle

- **Position:** top-right of nav, immediately left of the primary CTA.
- **Affordance:** icon-only button, `aria-label="Toggle dark mode"`, 44×44px touch target.
- **Icons:** sun (light mode active) / moon (dark mode active), both 20px, `text-brand-text` / `text-brand-dark-text`.
- **Persistence:** localStorage key `northside-theme`, default to `system` (follows `prefers-color-scheme`). Hydration-safe (mount effect, no flash).

---

## SECTION D — Section Order Checklist

### D.1 — Home page (the canonical 8-section landing)

| # | Section | Purpose | Must NOT do |
|---|---------|---------|-------------|
| 1 | **HERO** | Outcome-first headline (Q9: *"After using this service, I finally have a cut I can trust every visit."*) + subheadline + primary CTA + secondary CTA + hero image | Center the layout; lead with the shop name; use stock-photo *"handsome man smiling"* portraits |
| 2 | **THE PROBLEM** | Agitate the three objections (price uncertainty, wait time, quality skepticism) as a pain the customer has likely felt | Mention the solution or pitch any feature |
| 3 | **WHY US** | Three brand pillars (consistency, respect for time, skilled craft) as a staggered or 2+1 grid | Use the forbidden-phrase list; lead with *"we are the best"* |
| 4 | **WHAT YOU GET** | Service summary cards (fade, taper, lineup, beard trim, hot towel shave, shape-up) with starting-at prices | List every service in exhaustive detail (that belongs on the Services page); use lorem ipsum |
| 5 | **HOW IT WORKS** | 3–4 numbered steps for booking or walk-in flow | Promise *"no wait"* literally; hide the walk-in policy |
| 6 | **PROOF** | Reviews block + a CTA into the Gallery. Editorial split layout. | Use unverified stock testimonials; use only star counts with no quotes |
| 7 | **FAQ** | Address price, walk-ins, appointments, kids policy, parking. Tight section (`py-section-sm`). | Pad with 12+ questions; use generic questions unrelated to the three objections |
| 8 | **FINAL CTA** | One headline + one primary CTA + (optional) secondary. Maximum breathing room (`py-section-lg`). | Add a second column of content; add a nav link |

### D.2 — Other pages (multi-page site, INTAKE_SUMMARY → Q2)

| Page | Required sections in order | Notes |
|------|---------------------------|-------|
| **Services** | Page title → intro paragraph → service cards grid → pricing footnote → FAQ snippet → final CTA | Cards use C.6 styling; CTA per card uses C.1. No CMS — content is hardcoded in MDX or TSX. |
| **About** | Page title → shop story → barbers grid (placeholders OK) → consistency-promise block → final CTA | Barbers are placeholders until researcher fills `FACTS.json → owner_or_contact_name`. |
| **Gallery** | Page title → filter chips (fade / taper / lineup / beard / shave / all) → image grid → final CTA | Grid is 2-col on mobile, 3-col on tablet, 4-col on desktop. Captions use audience vocabulary. |
| **Contact** | Page title → address + hours + phone (two-column on desktop) → walk-in policy callout → contact form (C.8) → embedded map (optional) → final CTA | Hours table uses a 7-row grid (Mon–Sun). |

### D.3 — Global elements (every page)

| Element | Required? | Notes |
|---------|-----------|-------|
| **Top nav** | Yes | Sticky (C.3). Links: Home, Services, About, Gallery, Contact. Right side: dark-mode toggle + primary CTA. |
| **Footer** | Yes | Three columns on desktop, stacked on mobile: (1) brand + address snippet, (2) nav links, (3) hours snippet + phone. Bottom row: copyright + minimal legal links. |
| **Skip-to-content link** | Yes | First focusable element. Hidden until focused. |
| **Dark-mode toggle** | Yes | C.10. |
| **Cookie/analytics banner** | No | Not in scope; defer until launch. |

---

## SECTION E — Image Slot Manifest

No business-specific assets were provided (INTAKE_SUMMARY → Q11: A). Researcher sources from licensed image libraries (Pexels / Pixabay / Unsplash) and downloads to the project. Builder references local paths only — **no hotlinking**.

### E.1 — Home page slots

```
hero-image:               research/images/hero-chair.jpg        (barbershop chair / fade mid-cut, 4:5 portrait)
proof-portrait-1:         research/images/proof-portrait-1.jpg  (barber at work, 1:1 square)
proof-portrait-2:         research/images/proof-portrait-2.jpg  (barbershop interior, 1:1 square)
proof-portrait-3:         research/images/proof-portrait-3.jpg  (close-up fade detail, 1:1 square)
```

### E.2 — Services page slots

```
service-fade:             research/images/service-fade.jpg      (1:1, low or mid fade reference)
service-taper:            research/images/service-taper.jpg     (1:1, taper reference)
service-lineup:           research/images/service-lineup.jpg    (1:1, lineup / shape-up reference)
service-beard:            research/images/service-beard.jpg     (1:1, beard trim reference)
service-shave:            research/images/service-shave.jpg     (1:1, hot towel shave reference)
```

### E.3 — About page slots

```
about-shop-wide:          research/images/about-shop-wide.jpg   (16:9, shop interior)
about-barber-placeholder-1: research/images/about-barber-1.jpg (1:1, barber portrait — placeholder until FACTS.json → owner_or_contact_name is sourced)
about-barber-placeholder-2: research/images/about-barber-2.jpg (1:1, barber portrait — placeholder)
```

### E.4 — Gallery page slots

```
gallery-1: research/images/gallery-01.jpg
gallery-2: research/images/gallery-02.jpg
gallery-3: research/images/gallery-03.jpg
gallery-4: research/images/gallery-04.jpg
gallery-5: research/images/gallery-05.jpg
gallery-6: research/images/gallery-06.jpg
gallery-7: research/images/gallery-07.jpg
gallery-8: research/images/gallery-08.jpg
gallery-9: research/images/gallery-09.jpg
gallery-10: research/images/gallery-10.jpg
gallery-11: research/images/gallery-11.jpg
gallery-12: research/images/gallery-12.jpg
```

Minimum 12 gallery slots. All sourced from Pexels/Pixabay/Unsplash with the license recorded in `research/SOURCES.md`.

### E.5 — Contact page slots

```
contact-map: (optional, embedded map iframe URL; no image required)
```

If no embedded map is used, omit the slot entirely.

### E.6 — Image treatment rules (all slots)

- **Lazy load:** all below-the-fold images use `loading="lazy"`.
- **Dimensions:** every `<img>` declares explicit `width` and `height` attributes to prevent CLS.
- **Alt text:** every image has descriptive alt text. Decorative images use `alt=""`.
- **No filters:** no grayscale, no sepia, no duotone overlays.
- **No text overlays baked into images.**

---

## SECTION F — Binary QA Checklist

Every item below is a pass/fail check the visual gate runs against the rendered build. **No partial passes.** Any failed item = FAIL verdict.

### Hard requirements (must pass)

- [ ] **F-01** No `bg-gradient-*` Tailwind class on any element. (`grep -r "bg-gradient" app/ components/` returns 0.)
- [ ] **F-02** No 3-column symmetric feature grid. No element uses `grid-cols-3` with three equal-span items for service or feature display. (`grid-cols-3` is allowed only where two items span 1 col and one spans 2, per C.5.)
- [ ] **F-03** No icons rendered inside colored circle/square backgrounds. (`grep -r "rounded-full bg-" components/` returns 0 matches where an icon SVG is also present in the same wrapper.)
- [ ] **F-04** No colored left-border accent on any card. (`grep -r "border-l-" components/` returns 0 matches on card components.)
- [ ] **F-05** Hero headline is outcome-first. The hero `<h1>` contains the outcome from `INTAKE_SUMMARY → Q9` or a direct paraphrase; it does not lead with the shop name or a generic tagline.
- [ ] **F-06** Body copy is left-aligned throughout, except the hero headline and final CTA headline which may be center-aligned per C.4 / D.1.
- [ ] **F-07** Section order on the Home page matches D.1 exactly: HERO → THE PROBLEM → WHY US → WHAT YOU GET → HOW IT WORKS → PROOF → FAQ → FINAL CTA.
- [ ] **F-08** Dark mode is implemented and the toggle from C.10 is present in the nav on every page.
- [ ] **F-09** Font CDN links (Cabinet Grotesk from Fontshare, Inter from Google Fonts) are present in `app/layout.tsx` `<head>`.
- [ ] **F-10** Every image slot listed in SECTION E is filled with a real asset under `research/images/` or `public/`. No `placeholder.jpg`, no missing `src`, no visible `alt` text that says *"placeholder"*.
- [ ] **F-11** `USE_MOCK_DATA` is not set to `"true"` or `true` in any `.env*`, `next.config.*`, or runtime config file.
- [ ] **F-12** `tailwind.config.ts` contains the `brand` and `brand-dark` color keys from SECTION A with the exact hex values listed. (`grep -E "#(C2410C|E2623A|F7F4EF|13110F)" tailwind.config.ts` returns all four matches.)
- [ ] **F-13** None of the canonical 24 forbidden phrases appear anywhere in the rendered page text (copywriter owns the list; visual gate greps built HTML for the literal phrases).
- [ ] **F-14** Primary CTA button text is `action + outcome` (e.g., *"Book your fade,"* *"See today's hours"*), not *"Learn More,"* *"Get Started,"* *"Click Here,"* or *"Submit."*
- [ ] **F-15** Section padding values vary across sections per C.7. `grep -E "py-(section-(sm|md|lg)|1[6-9]|2[0-4])" app/page.tsx` returns at least three distinct values across the eight home sections.

### Soft requirements (warn on fail, do not block)

- [ ] **F-16** Color contrast meets WCAG AA on every text/background pair (audited values in SECTION A; spot-check via axe DevTools or Lighthouse).
- [ ] **F-17** All interactive elements (buttons, links, inputs, toggles) have visible `:hover`, `:focus-visible`, and `:disabled` states defined per C.1 / C.2 / C.8.
- [ ] **F-18** Responsive breakpoints behave per spec: at 360px viewport, no horizontal scroll; at 768px, nav switches to mobile drawer pattern; at 1024px, hero becomes 7:5 two-column layout.
- [ ] **F-19** Motion uses only `transition-colors` and `transition-shadow` with durations 150–250ms and `ease-out` or `ease-in-out`. No spinning, no bouncing, no parallax.
- [ ] **F-20** `@media (prefers-reduced-motion: reduce)` disables all non-essential motion.
- [ ] **F-21** All `<img>` tags have explicit `width` and `height` attributes. Below-the-fold images use `loading="lazy"`.
- [ ] **F-22** No `lorem ipsum` text anywhere on any page. (`grep -ri "lorem" app/ components/` returns 0.)
- [ ] **F-23** Every page has a unique `<title>` and `<meta name="description">` derived from the page content.
- [ ] **F-24** All in-page anchor links resolve to existing route fragments. No `href="#"` placeholders.
- [ ] **F-25** Card hover behavior changes shadow + translate (per C.6), not color flip.
- [ ] **F-26** Nav becomes translucent + adds hairline shadow when `window.scrollY > 8` (per C.3).
- [ ] **F-27** All touch targets (buttons, links, toggles) are at least 44×44px on mobile.
- [ ] **F-28** Form inputs (Contact) show visible focus rings matching C.8 and surface error states with both border color change and helper text.
- [ ] **F-29** FAQ section is tighter than other sections per C.7 (`py-section-sm` = 64px).
- [ ] **F-30** Gallery grid is 2-col / 3-col / 4-col across mobile / tablet / desktop breakpoints.

---

## SECTION G — Tracing Back to FACTS.json

Decisions in this file reference:

- `FACTS.json → business_name` — brand token names, nav, footer
- `FACTS.json → audience_vocabulary` — gallery captions, service names, FAQ headings
- `FACTS.json → objections` — THE PROBLEM section content; FAQ topics; PROOF section angle
- `FACTS.json → services[].name` — service card titles on Home and Services pages
- `FACTS.json → services[].price` — starting-at figures on Services page and WHAT YOU GET
- `INTAKE_SUMMARY.md → Q2` — multi-page structure (D.2)
- `INTAKE_SUMMARY.md → Q4` — modern minimalist aesthetic (palette, type, motion)
- `INTAKE_SUMMARY.md → Q9` — hero outcome (F-05)
- `INTAKE_SUMMARY.md → Q10` — forbidden-phrase policy (F-13)
- `INTAKE_SUMMARY.md → Q11` — image sourcing responsibility (E.1–E.4)

When `FACTS.json` blanks are filled by the researcher, the builder updates the corresponding components without changing layout or type.
