import Link from "next/link";
import { HOME_WHY_US } from "@/data/copy";

/**
 * Home §WHY US — staggered layout per VISUAL_SPEC §C.5.
 * Three brand pillars are offset on the vertical axis (mt-0 / mt-12 / mt-6)
 * to avoid the forbidden 3-column-symmetric grid.
 */
export function HomeWhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="home-why-us-h2"
      className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
              {HOME_WHY_US.eyebrow}
            </p>
            <h2
              id="home-why-us-h2"
              className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
            >
              {HOME_WHY_US.h2}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {HOME_WHY_US.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href={HOME_WHY_US.cta.href}
                className="inline-flex items-center justify-center border border-brand-border bg-transparent px-6 py-3 rounded font-body text-base font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
              >
                {HOME_WHY_US.cta.label}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {HOME_WHY_US.pillars.map((pillar, i) => (
                <li
                  key={pillar.title}
                  className={[
                    "rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:border-brand-dark-border dark:bg-brand-dark-surface",
                    i === 1 ? "md:mt-12" : i === 2 ? "md:mt-6" : "mt-0",
                  ].join(" ")}
                >
                  <p className="font-display text-xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text">
                    {pillar.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
