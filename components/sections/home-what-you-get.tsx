import Link from "next/link";
import { HOME_WHAT_YOU_GET } from "@/data/copy";

/**
 * Home §WHAT YOU GET — staggered 2-col layout per VISUAL_SPEC §C.5.
 *
 * F-02 forbids a symmetric 3-col grid for service/feature display. We use a
 * 2-col base on desktop with vertical offsets so every card keeps breathing
 * room and the layout reads as a staggered feature list, not a uniform grid.
 *
 * Six cards spread across four rows so no row ever holds 3 equal-span items:
 *   Row 1 (md:grid-cols-2): Fade, Taper
 *   Row 2 (md:col-span-2 of md:grid-cols-2, lead wide): Lineup
 *   Row 3 (md:grid-cols-2): Beard trim, Hot towel shave
 *   Row 4 (md:col-span-2 of md:grid-cols-2, lead wide): Shape-up
 *
 * Cells render unchanged — they each host one card.
 */
export function HomeWhatYouGet() {
  const items = HOME_WHAT_YOU_GET.items;

  return (
    <section
      id="what-you-get"
      aria-labelledby="home-what-you-get-h2"
      className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="max-w-prose">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
            {HOME_WHAT_YOU_GET.eyebrow}
          </p>
          <h2
            id="home-what-you-get-h2"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
          >
            {HOME_WHAT_YOU_GET.h2}
          </h2>
        </div>

        {/* Row 1: 2 cards (Fade + Taper) */}
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[items[0], items[1]].map((item) => (
            <li
              key={item.name}
              className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:border-brand-dark-border dark:bg-brand-dark-surface"
            >
              <p className="font-display text-xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text">
                {item.name}.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Row 2: 1 wide card (Lineup) */}
        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <li
            key={items[2].name}
            className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 md:col-span-2 dark:border-brand-dark-border dark:bg-brand-dark-surface"
          >
            <p className="font-display text-xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text">
              {items[2].name}.
            </p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {items[2].body}
            </p>
          </li>
        </ul>

        {/* Row 3: 2 cards (Beard trim + Hot towel shave) */}
        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[items[3], items[4]].map((item) => (
            <li
              key={item.name}
              className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:border-brand-dark-border dark:bg-brand-dark-surface"
            >
              <p className="font-display text-xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text">
                {item.name}.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Row 4: 1 wide card (Shape-up) */}
        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <li
            key={items[5].name}
            className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 md:col-span-2 dark:border-brand-dark-border dark:bg-brand-dark-surface"
          >
            <p className="font-display text-xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text">
              {items[5].name}.
            </p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {items[5].body}
            </p>
          </li>
        </ul>

        <div className="mt-10">
          <Link
            href={HOME_WHAT_YOU_GET.cta.href}
            className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
          >
            {HOME_WHAT_YOU_GET.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
