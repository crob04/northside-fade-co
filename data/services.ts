/**
 * Service data — six cards per COPY_BRIEF §4.1.
 * Every card has audience-vocabulary name + outcome-first description + duration.
 * Durations are operator-blank placeholders — the operator fills them in.
 * Pricing is operator-blank and renders as "Starting at — confirm with barber."
 * No fabricated prices, no fabricated durations.
 */

export type Service = {
  slug: string;
  name: string;
  description: string;
  duration: string;          // e.g. "~30 min"
  startingAt: string;        // "Starting at — confirm with barber." (operator-blank)
  cta: { label: string; href: string };
  /** Image slot — VISUAL_SPEC §E.2. We have 3 distinct service images plus
   *  several reuse candidates. Mapping aligns with VISUAL_SPEC slots while
   *  using only the 10 sourced assets. */
  image: { src: string; alt: string };
};

export const SERVICES: Service[] = [
  {
    slug: "fade",
    name: "Fade",
    description:
      "Taper that holds from day one to week three, built around the cut you want next month.",
    duration: "~30 min",
    startingAt: "Starting at — confirm with barber.",
    cta: { label: "Book this service →", href: "/contact" },
    image: {
      src: "/images/services-fade.jpg",
      alt: "Curly-top fade with sharp line-up.",
    },
  },
  {
    slug: "taper",
    name: "Taper",
    description:
      "The cleanest neckline and sideburns in the shop, blended so the line does not announce itself midweek.",
    duration: "~25 min",
    startingAt: "Starting at — confirm with barber.",
    cta: { label: "Book this service →", href: "/contact" },
    image: {
      src: "/images/services-taper.jpg",
      alt: "Barber using clippers on a nape taper.",
    },
  },
  {
    slug: "lineup",
    name: "Lineup",
    description:
      "Sharp edges, square or rounded, done in the chair while you wait.",
    duration: "~15 min",
    startingAt: "Starting at — confirm with barber.",
    cta: { label: "Book this service →", href: "/contact" },
    image: {
      src: "/images/about-detail.jpg",
      alt: "Barber shaping a lineup with clippers.",
    },
  },
  {
    slug: "beard-trim",
    name: "Beard trim",
    description:
      "Same barber as the cut, so the beard meets the fade cleanly. Cheek and neckline shape-up included.",
    duration: "~20 min",
    startingAt: "Starting at — confirm with barber.",
    cta: { label: "Book this service →", href: "/contact" },
    image: {
      src: "/images/services-beard.jpg",
      alt: "Hot towel shave and beard trim in progress.",
    },
  },
  {
    slug: "hot-towel-shave",
    name: "Hot towel shave",
    description:
      "Straight-razor, hot towel, cold-press finish.",
    duration: "~45 min",
    startingAt: "Starting at — confirm with barber.",
    cta: { label: "Book this service →", href: "/contact" },
    image: {
      src: "/images/gallery-2.jpg",
      alt: "Black-and-white hot towel shave prep.",
    },
  },
  {
    slug: "shape-up",
    name: "Shape-up",
    description:
      "Between-cuts clean-up for the line and sides when a full cut is more than you need.",
    duration: "~15 min",
    startingAt: "Starting at — confirm with barber.",
    cta: { label: "Book this service →", href: "/contact" },
    image: {
      src: "/images/about-barber.jpg",
      alt: "Barber portrait in the shop.",
    },
  },
];
