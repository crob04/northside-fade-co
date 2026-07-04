/**
 * Locked copy from COPY_BRIEF.md — implemented verbatim.
 * Per the binding contract, this file is the single source of truth for
 * customer-facing copy. Do not paraphrase; do not shorten; do not "fix".
 *
 * Operator-blank fields are flagged as [OPERATOR-BLANK] in the brief and
 * rendered with honest placeholder UI (e.g., "Confirm with barber",
 * "123 Main St — confirm with operator") rather than fabricated values.
 */

/* ------------------------------------------------------------------ *
 *  NAV / FOOTER
 * ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER = {
  brandDescription:
    "A neighborhood barbershop where the cut is the same every visit. Same barber, same chair, same cut.",
  hoursLabel: "Hours",
  phoneLabel: "Phone",
  addressLabel: "Address",
  contactPrompt: "Walk in or book ahead. The chair is open today.",
  copyright: `© ${new Date().getFullYear()} Northside Fade Co.`,
} as const;

/* ------------------------------------------------------------------ *
 *  HOME — section copy (per COPY_BRIEF §2–§3)
 * ------------------------------------------------------------------ */

export const HOME_HERO = {
  eyebrow: "NORTHSIDE FADE CO. — NORTHEAST NEIGHBORHOOD SHOP",
  headline: "A cut you can trust every visit.",
  byline:
    "Walk in or book ahead. Same barbers, same chair, same cut. No upsell, no surprises, no waiting on the wrong person to learn the chair is open.",
  primaryCta: { label: "Book on Booksy →", href: "/contact" },
  secondaryCta: { label: "View Hours & Walk-Ins", href: "/contact" },
  proofMicrocopy:
    "[fade · taper · lineup · beard trim · hot towel shave · shape-up]",
  // Hero image — sourced from research/images/hero.jpg per VISUAL_SPEC §E.1.
  image: { src: "/images/hero.jpg", alt: "Barber cutting a client's fade in the shop." },
} as const;

export const HOME_PROBLEM = {
  eyebrow: "THE PROBLEM",
  h2: "You've been gambling on the chair.",
  paragraphs: [
    "You walk in. The chair is open. The barber nods, you sit down, and the clippers come out. Nobody asks what you wanted. You leave looking close enough to what you said, or worse, to what the last guy got.",
    "When the cut is good, it is good because the barber remembered something about you. When it is bad, you eat the cost of three weeks of growing it out.",
    "Walk-ins and appointments share the same roulette. Different barber, different week, different result.",
  ],
} as const;

export const HOME_WHY_US = {
  eyebrow: "WHY US",
  h2: "Same barber. Same chair. Same cut.",
  paragraphs: [
    "The cut is built around memory. The barber who cut you last week is the one who cuts you this week, with the same notes on your fade, your lineup, your neckline, your preferences.",
    "When the barber who cut you is off, the shop tells you who is taking the chair, and you can move your appointment or wait for the one who knows your head.",
    "That is the whole trick. The work is consistent enough that you stop thinking about who cuts your hair and start thinking about where to go after.",
  ],
  cta: { label: "See our barbers →", href: "/about" },
  /* Three brand pillars — VISUAL_SPEC D.1 §3 maps to BRAND_DIRECTION §2. */
  pillars: [
    {
      title: "Consistency you can count on.",
      body:
        "Same barber, same cut, same result. The barbers keep notes on your fade, your lineup, your neckline, your preferences.",
    },
    {
      title: "Respect for your time.",
      body:
        "Walk-ins welcome, appointments held. The shop tells you who is in the chair before you arrive, and the wait is a known number, not a guess.",
    },
    {
      title: "Skilled, no-ego craft.",
      body:
        "Trained barbers who care about fades, tapers, lineups, beard trims, and hot towel shaves. The work is precise; the chair does not shout.",
    },
  ],
} as const;

export const HOME_WHAT_YOU_GET = {
  eyebrow: "WHAT YOU GET",
  h2: "Six services. One shop. No package, no membership.",
  items: [
    {
      name: "Fade",
      body:
        "A taper that holds its shape from day one to week three. Built around the haircut you want next month, not just today's mirror.",
    },
    {
      name: "Taper",
      body:
        "The cleanest neckline and sideburns in the shop, blended so the line does not announce itself midweek.",
    },
    {
      name: "Lineup",
      body:
        "Sharp edges, square or rounded, done in the chair while you wait. Book it on the same day as your last cut when the shape is still there.",
    },
    {
      name: "Beard trim",
      body:
        "Same barber as the cut, so the beard meets the fade cleanly. Shape-up on the cheeks and neckline included.",
    },
    {
      name: "Hot towel shave",
      body:
        "Straight-razor, hot towel, finished with a cold press. Not a daily thing; the right thing, once in a while.",
    },
    {
      name: "Shape-up",
      body:
        "Between-cuts clean-up for the line and sides when a full cut is more than you need.",
    },
  ],
  cta: { label: "See full menu on the Services page →", href: "/services" },
} as const;

export const HOME_HOW_IT_WORKS = {
  eyebrow: "HOW IT WORKS",
  h2: "The chair is open. Three ways in.",
  steps: [
    {
      n: "01",
      title: "Walk in.",
      body:
        "The shop takes walk-ins until the chairs fill. When you walk in, the barber who is free cuts you.",
    },
    {
      n: "02",
      title: "Book ahead.",
      body:
        "When you want a specific barber, book the chair. The barber is the barber you get, unless the shop tells you otherwise before you arrive.",
    },
    {
      n: "03",
      title: "Get the same cut.",
      body:
        "The notes from last time are the notes this time. The cut is built around memory, not around whoever is free when you sit down.",
    },
    {
      n: "04",
      title: "Walk out sharp.",
      body:
        "The chair is open today. Book now, or walk in and we'll fit you in.",
    },
  ],
} as const;

export const HOME_PROOF = {
  eyebrow: "PROOF",
  h2: "The work is the pitch.",
  body: [
    "The Gallery has the cuts — before-and-after, fade builds, lineup geometry, beard work, hot-towel finishes. Each photo is from the chair, not a stock library.",
    "Reviews live on our booking page. That is where the next cut gets scheduled, so the proof and the next appointment are in the same place.",
  ],
  primaryCta: { label: "See the Gallery →", href: "/gallery" },
  secondaryCta: {
    label: "Read reviews on our booking page →",
    href: "/contact",
  },
  // Three 1:1 portrait slots for the editorial split — VISUAL_SPEC §E.1
  portraits: [
    {
      src: "/images/about-barber.jpg",
      alt: "Barber portrait in the shop.",
    },
    {
      src: "/images/about-shop.jpg",
      alt: "Modern barbershop interior with chair and mirrors.",
    },
    {
      src: "/images/about-detail.jpg",
      alt: "Barber working a fade with clippers.",
    },
  ],
} as const;

export const HOME_FAQ = {
  eyebrow: "OBJECTIONS, ANSWERED",
  h2: "Real questions, plain answers.",
  // Three objection handlers per COPY_BRIEF §9 — locked headings + bodies.
  items: [
    {
      q: "Will I find out the price at the chair, or before?",
      a: [
        "The price on the booking page is the price you pay. The starting price is set on the Services page for every service.",
        "If something changes — you add a beard trim to a fade, or the cut needs more work than the book — the barber tells you before the clippers come out.",
        "There is no menu mystery and no upsell. The price is the price.",
      ],
    },
    {
      q: "How long is the wait if I just walk in?",
      a: [
        "It depends on the day, but the shop gives realistic estimates before you sit down. Calling ahead is the fastest path for a specific barber; walking in is faster for an open chair today.",
        "When the barber who cuts you is off, the shop tells you who is taking the chair when you book, so the wait is a known number — not a guess.",
      ],
    },
    {
      q: "What if the cut isn't right?",
      a: [
        "The same barber who cuts you has the notes from last time. The cut is built around memory, not around the chair being open.",
        "If the shape is off when you sit in the chair, the barber adjusts on the spot. If something catches you when you get home, the shop wants to hear about it before your next appointment — not three weeks later.",
      ],
    },
  ],
} as const;

export const HOME_FINAL_CTA = {
  eyebrow: "THE CHAIR IS OPEN",
  h2: "Same cut. Every visit. The chair is open today.",
  byline:
    "Walk in or book ahead. The barbers know the chair. You walk out looking like yourself — just sharper.",
  primaryCta: { label: "Book on Booksy →", href: "/contact" },
  secondaryCta: { label: "Call the shop →", href: "/contact" },
} as const;

/* ------------------------------------------------------------------ *
 *  SERVICES page
 * ------------------------------------------------------------------ */

export const SERVICES_PAGE = {
  h1: "Services.",
  byline:
    "Every cut is the same cut we remember from last time. Pick the one for today.",
  pricingNote: {
    h3: "What affects your price.",
    paragraphs: [
      "Length, density, and what you want done are the inputs. A lineup with no cut is the lighter ticket. A fade with a beard trim and a hot-towel finish is the longer one.",
      "The price at the chair is the same as the price on the booking page. If something changes — you add a service, or the cut is more work — the barber tells you before the clippers come out.",
      "No tip-screen presets. No upsell push.",
    ],
  },
  cta: {
    h3: "Pick the one for today.",
    body: "The chair is open. Book on Booksy, or walk in and we'll fit you in.",
    primary: { label: "Book on Booksy →", href: "/contact" },
    secondary: { label: "See the Gallery →", href: "/gallery" },
  },
} as const;

/* ------------------------------------------------------------------ *
 *  ABOUT page
 * ------------------------------------------------------------------ */

export const ABOUT_PAGE = {
  h1: "The barbers.",
  byline: "Same barbers, same chairs, same memory. The shop is the cut.",
  shopParagraph: [
    "Northside Fade Co. is a neighborhood shop in the [neighborhood] side of the city. The chairs are not stations — they belong to the barbers who work them. Whoever cuts you this week is whoever cuts you next week, with the same notes on your fade, your lineup, your preferences.",
    "When the barber who cuts you is off, the shop tells you who is taking the chair that day, so you can move your appointment or wait for the one who knows your head.",
    "Walk-ins and appointments share the same memory book.",
  ],
  // Placeholders — barbers are operator-blank. Per COPY_BRIEF §5.2 the grid
  // renders role-only placeholders. No fabricated names.
  barbers: [
    {
      role: "The Fade Barber",
      src: "/images/about-barber.jpg",
      alt: "Portrait of the Fade Barber in the shop.",
      body:
        "Trained on the classics, working on the cuts the shop sends out the door. The chair is the work; the work is the chair.",
    },
    {
      role: "The Lineup Barber",
      src: "/images/about-detail.jpg",
      alt: "The Lineup Barber in action with clippers.",
      body:
        "Sharp edges and clean lineups, every visit. The shape you had last time is the shape you get this time.",
    },
  ],
  promise: {
    h2: "The cut is the memory.",
    body:
      "The shop does not promise more than it cuts. What the barber remembers, you wear for three weeks.",
    cta: { label: "Book on Booksy →", href: "/contact" },
  },
} as const;

/* ------------------------------------------------------------------ *
 *  GALLERY page
 * ------------------------------------------------------------------ */

export const GALLERY_PAGE = {
  h1: "The work.",
  byline:
    "Photos from the chair. Each cut has the barber's name and the chair time.",
  // Twelve image slots; ten unique assets + two deliberate reuses.
  // All captions use audience vocabulary per COPY_BRIEF §6.1.
  images: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Profile view of a finished skin fade with lined beard.",
      caption: "Skin fade + lined beard — Marcus, 35 min",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Black-and-white hot towel shave in progress.",
      caption: "Hot towel finish — Diego, 45 min",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Vintage barbershop interior with chair and mirrors.",
      caption: "Behind the chair.",
    },
    {
      src: "/images/services-fade.jpg",
      alt: "Curly-top fade with sharp line-up.",
      caption: "Fade build, curly top — 30 min",
    },
    {
      src: "/images/services-taper.jpg",
      alt: "Barber using clippers on a nape taper.",
      caption: "Taper + shape-up — 25 min",
    },
    {
      src: "/images/services-beard.jpg",
      alt: "Straight-razor hot towel shave in progress.",
      caption: "Hot towel shave prep — 45 min",
    },
    {
      src: "/images/about-shop.jpg",
      alt: "Modern barbershop interior.",
      caption: "The shop.",
    },
    {
      src: "/images/about-detail.jpg",
      alt: "Barber working a fade with clippers.",
      caption: "Mid-cut fade — 35 min",
    },
    {
      src: "/images/about-barber.jpg",
      alt: "Barber portrait, denim apron.",
      caption: "Behind the chair.",
    },
    {
      src: "/images/hero.jpg",
      alt: "Barber cutting a client's fade.",
      caption: "In the chair — 40 min",
    },
    {
      src: "/images/gallery-1.jpg",
      alt: "Detail of a finished fade on textured hair.",
      caption: "Low taper with lineup — 30 min",
    },
    {
      src: "/images/services-taper.jpg",
      alt: "Taper detail on the nape.",
      caption: "Nape taper detail — 20 min",
    },
  ],
  closing: {
    h3: "Same chair next time.",
    body:
      "Book the barber who cut the photo you liked. The chair is the memory.",
    cta: { label: "Book on Booksy →", href: "/contact" },
  },
} as const;

/* ------------------------------------------------------------------ *
 *  CONTACT page
 * ------------------------------------------------------------------ */

export const CONTACT_PAGE = {
  h1: "Get to the shop.",
  byline: "Walk in or book ahead. The chair is open today.",
  /* OPERATOR-BLANK fields. The Contact page renders honest placeholder
     copy ("123 Main St — confirm with operator", "Mon–Fri · confirm with
     shop", etc.) until the operator populates FACTS.json. No fabrication. */
  address: {
    street: "[Street address — confirm with operator]",
    cityStateZip: "[City, State ZIP — confirm with operator]",
  },
  /* Hours table — 7 rows Mon–Sun. Operator-blank — placeholder is just
     a dash cell, so the table never lies about hours it doesn't have. */
  hours: [
    { day: "Mon", value: "[confirm with shop]" },
    { day: "Tue", value: "[confirm with shop]" },
    { day: "Wed", value: "[confirm with shop]" },
    { day: "Thu", value: "[confirm with shop]" },
    { day: "Fri", value: "[confirm with shop]" },
    { day: "Sat", value: "[confirm with shop]" },
    { day: "Sun", value: "[confirm with shop]" },
  ],
  phone: "[Phone — confirm with operator]",
  walkInPolicy: {
    h2: "Walk-ins and appointments.",
    body: [
      "The shop takes walk-ins until the chairs fill. Calling ahead does not always beat walking in, but it helps when you want a specific barber.",
      "Appointments are held for ten minutes past the slot. After that, the slot opens back up to walk-ins.",
      "The barber you booked is the barber you get, unless the shop tells you otherwise before you arrive.",
    ],
  },
  formCopy: {
    title: "Send a message.",
    intro:
      "Drop a note and the shop will get back to you. For booking, use the button — the chair is the fastest path.",
    labels: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      service: "Service you're booking",
      barber: "Preferred barber (optional)",
      date: "Preferred date",
      time: "Preferred time",
      notes: "Notes",
    },
    placeholders: {
      name: "Your name",
      phone: "Your phone",
      email: "Your email",
      service:
        "Fade · Taper · Lineup · Beard trim · Hot towel shave · Shape-up",
      barber: "Any barber",
      date: "DD / MM / YYYY",
      time: "HH : MM",
      notes: "Anything we should know",
    },
    submit: "Send message",
    note:
      "Submitting this form opens your email client with the message prefilled and pre-addressed to the shop. No backend required.",
  },
  cta: {
    primary: { label: "Book on Booksy →", href: "/contact" },
    secondary: { label: "Get directions →", href: "/contact" },
  },
} as const;

/* ------------------------------------------------------------------ *
 *  404 / fallback (COPY_BRIEF §10.5)
 * ------------------------------------------------------------------ */

export const NOT_FOUND = {
  title: "Page not found.",
  body: "The chair is still open at the shop. Head back home or book a slot.",
  cta: { label: "Back home →", href: "/" },
} as const;

/* ------------------------------------------------------------------ *
 *  Microcopy pack (COPY_BRIEF §10.4) — kept here for the render path.
 * ------------------------------------------------------------------ */

export const STATES = {
  loading: "Loading…",
  imageError: "That cut didn't load. Try refreshing the page.",
  sendError: "We couldn't send that. Try again, or call the shop.",
  booked:
    "You're booked. The barber will see you at the time you picked.",
  slotTaken: "That slot is taken. Pick another time →",
} as const;
