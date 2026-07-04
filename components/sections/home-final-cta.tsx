import Link from "next/link";
import { HOME_FINAL_CTA } from "@/data/copy";

/**
 * Home §FINAL CTA — VISUAL_SPEC §D.1 §8.
 * Maximum breathing room (py-section-lg). Centered. One headline + one primary CTA + one secondary.
 * Per C.4 and D.1, the final CTA headline may be center-aligned (and per VISUAL_SPEC F-06
 * the hero + final CTA headlines are the only opt-in centered headlines).
 */
export function HomeFinalCta() {
  return (
    <section
      id="final-cta"
      aria-labelledby="home-final-cta-h2"
      className="border-t border-brand-border py-section-sm md:py-section-lg dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-prose px-6 text-center md:px-8">
        <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-primary dark:text-brand-dark-primary">
          {HOME_FINAL_CTA.eyebrow}
        </p>
        <h2
          id="home-final-cta-h2"
          className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
        >
          {HOME_FINAL_CTA.h2}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-muted dark:text-brand-dark-muted">
          {HOME_FINAL_CTA.byline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={HOME_FINAL_CTA.primaryCta.href}
            className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
          >
            {HOME_FINAL_CTA.primaryCta.label}
          </Link>
          <Link
            href={HOME_FINAL_CTA.secondaryCta.href}
            className="inline-flex items-center justify-center border border-brand-border bg-transparent px-6 py-3 rounded font-body text-base font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
          >
            {HOME_FINAL_CTA.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
