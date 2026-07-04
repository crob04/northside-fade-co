import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_PAGE } from "@/data/copy";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fades, tapers, lineups, beard trims, hot towel shaves, and shape-ups. Pick the one for today.",
};

/**
 * Services page — VISUAL_SPEC §D.2.
 *   Page title → intro paragraph → service cards grid → pricing footnote →
 *   FAQ snippet → final CTA.
 *
 * No 3-column-symmetric grid (F-02). We use a 2-col mobile / 3-col desktop
 * grid here where each card has equal span — that layout is ALLOWED per
 * C.5; the FORBIDDEN case is 3 cards with the same content hierarchy.
 */
export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-section-sm md:py-section-md">
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="max-w-prose">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-6xl dark:text-brand-dark-text">
              {SERVICES_PAGE.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {SERVICES_PAGE.byline}
            </p>
          </div>
        </div>
      </section>

      {/* Service cards grid */}
      <section
        id="service-grid"
        aria-label="Service list"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          {/* F-02: no symmetric 3-col grid for service display. 2-col on
              desktop with a staggered vertical offset on every other card. */}
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:[&>li:nth-child(even)]:mt-8">
            {SERVICES.map((s) => (
              <li
                key={s.slug}
                className="flex flex-col rounded-lg border border-brand-border bg-brand-surface shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:border-brand-dark-border dark:bg-brand-dark-surface"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-brand-text dark:text-brand-dark-text">
                    {s.name}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                    {s.description}
                  </p>
                  <p className="mt-4 font-body text-sm text-brand-muted dark:text-brand-dark-muted">
                    {s.duration}
                  </p>
                  <p className="mt-2 font-display text-base font-semibold text-brand-text dark:text-brand-dark-text">
                    {s.startingAt}
                  </p>
                  <Link
                    href={s.cta.href}
                    className="mt-5 inline-flex items-center justify-center bg-brand-primary px-5 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
                  >
                    {s.cta.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing footnote */}
      <section
        id="pricing-note"
        aria-labelledby="pricing-note-h3"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="mx-auto max-w-prose">
            <h3
              id="pricing-note-h3"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text"
            >
              {SERVICES_PAGE.pricingNote.h3}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {SERVICES_PAGE.pricingNote.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        aria-labelledby="services-cta-h3"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 text-center md:px-8">
          <h3
            id="services-cta-h3"
            className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text"
          >
            {SERVICES_PAGE.cta.h3}
          </h3>
          <p className="mt-4 max-w-prose mx-auto text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
            {SERVICES_PAGE.cta.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={SERVICES_PAGE.cta.primary.href}
              className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
            >
              {SERVICES_PAGE.cta.primary.label}
            </Link>
            <Link
              href={SERVICES_PAGE.cta.secondary.href}
              className="inline-flex items-center justify-center border border-brand-border bg-transparent px-6 py-3 rounded font-body text-base font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
            >
              {SERVICES_PAGE.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
