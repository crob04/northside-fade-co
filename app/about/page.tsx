import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ABOUT_PAGE } from "@/data/copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Same barbers, same chairs, same memory. Meet the people behind the chair at Northside Fade Co.",
};

/**
 * About page — VISUAL_SPEC §D.2.
 *   Page title → shop story → barbers grid (placeholders OK) →
 *   consistency-promise block → final CTA.
 *
 * Barbers are operator-blank. Per COPY_BRIEF §5.2 the grid renders role-only
 * placeholders ("The Fade Barber", "The Lineup Barber") without fabricated
 * names. Images are sourced portraits from research/images/.
 */
export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-section-sm md:py-section-md">
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-6xl dark:text-brand-dark-text">
                {ABOUT_PAGE.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-brand-muted md:text-xl dark:text-brand-dark-muted">
                {ABOUT_PAGE.byline}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-card">
                <Image
                  src="/images/about-shop.jpg"
                  alt="Modern barbershop interior at Northside Fade Co."
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop story */}
      <section
        aria-labelledby="about-shop-h2"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="mx-auto max-w-prose">
            <h2
              id="about-shop-h2"
              className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
            >
              The shop.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {ABOUT_PAGE.shopParagraph.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Barbers grid */}
      <section
        aria-labelledby="about-barbers-h2"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <h2
            id="about-barbers-h2"
            className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
          >
            Behind the chair.
          </h2>

          {/* 2-card grid (placeholders). No fabricated names. */}
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ABOUT_PAGE.barbers.map((b) => (
              <li
                key={b.role}
                className="rounded-lg border border-brand-border bg-brand-surface shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:border-brand-dark-border dark:bg-brand-dark-surface"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-2xl font-bold tracking-tight text-brand-text dark:text-brand-dark-text">
                    {b.role}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-prose text-sm text-brand-muted dark:text-brand-dark-muted">
            Operator-blank: barber names are placeholders until the operator
            supplies the team bio. No fabricated names.
          </p>
        </div>
      </section>

      {/* Consistency promise */}
      <section
        aria-labelledby="about-promise-h2"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-prose px-6 text-center md:px-8">
          <h2
            id="about-promise-h2"
            className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
          >
            {ABOUT_PAGE.promise.h2}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
            {ABOUT_PAGE.promise.body}
          </p>
          <div className="mt-8">
            <Link
              href={ABOUT_PAGE.promise.cta.href}
              className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
            >
              {ABOUT_PAGE.promise.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
