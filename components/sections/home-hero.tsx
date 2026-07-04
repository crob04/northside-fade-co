import Image from "next/image";
import Link from "next/link";
import { HOME_HERO } from "@/data/copy";

/**
 * Home hero — VISUAL_SPEC §C.4 / §D.1 §1.
 *  - 7:5 two-column desktop, stacked mobile (single column, text first)
 *  - Headline: outcome-first, display font, big
 *  - Subheadline / byline: body font, muted
 *  - Primary + secondary CTA row, stacked mobile
 *  - Proof microcopy tag row beneath CTAs
 *  - Hero image: rounded-xl, shadow-card, 4:5 aspect ratio, object-cover
 */
export function HomeHero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-h1"
      className="py-section-sm md:py-section-lg"
    >
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-12 md:px-8">
        <div className="lg:col-span-7">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
            {HOME_HERO.eyebrow}
          </p>
          <h1
            id="home-hero-h1"
            className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-6xl lg:text-7xl dark:text-brand-dark-text"
          >
            {HOME_HERO.headline}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-brand-muted md:text-xl dark:text-brand-dark-muted">
            {HOME_HERO.byline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={HOME_HERO.primaryCta.href}
              className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
            >
              {HOME_HERO.primaryCta.label}
            </Link>
            <Link
              href={HOME_HERO.secondaryCta.href}
              className="inline-flex items-center justify-center border border-brand-border bg-transparent px-6 py-3 rounded font-body text-base font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
            >
              {HOME_HERO.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-6 font-body text-xs text-brand-muted dark:text-brand-dark-muted">
            {HOME_HERO.proofMicrocopy}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-card">
            <Image
              src={HOME_HERO.image.src}
              alt={HOME_HERO.image.alt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
