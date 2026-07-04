import { HOME_FAQ } from "@/data/copy";

/**
 * Home §FAQ — objection handlers per COPY_BRIEF §9 + VISUAL_SPEC §C.7.
 * py-section-sm (64px) — tighter than other sections, per F-29.
 * Renders as accessible <details>/<summary> accordions (no JS required).
 */
export function HomeFaq() {
  return (
    <section
      id="objections"
      aria-labelledby="home-faq-h2"
      className="border-t border-brand-border py-section-sm dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
              {HOME_FAQ.eyebrow}
            </p>
            <h2
              id="home-faq-h2"
              className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
            >
              {HOME_FAQ.h2}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-brand-border border-y border-brand-border dark:divide-brand-dark-border dark:border-brand-dark-border">
              {HOME_FAQ.items.map((item) => (
                <li key={item.q}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-bold text-brand-text transition-colors duration-200 hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:text-brand-dark-text dark:hover:text-brand-dark-primary [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={20}
                        height={20}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-open:rotate-180"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="pb-6 space-y-3 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                      {item.a.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
