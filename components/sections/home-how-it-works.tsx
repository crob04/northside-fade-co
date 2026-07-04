import { HOME_HOW_IT_WORKS } from "@/data/copy";

/**
 * Home §HOW IT WORKS — full-width-lead with 2+1 tail per VISUAL_SPEC §C.5.
 *
 * F-02 forbids a symmetric 3-col grid for service/feature display. We use the
 * `full-width-lead` layout: one wide lead card on top (full row), then
 * two small cards in a 2-col grid, then one final wide card on its own row.
 *
 * Four steps total. Layout:
 *   Lead wide card: step 1
 *   2 small cards: steps 2, 3   (md:grid-cols-2)
 *   Lead wide card: step 4
 */
export function HomeHowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="home-how-it-works-h2"
      className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="max-w-prose">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
            {HOME_HOW_IT_WORKS.eyebrow}
          </p>
          <h2
            id="home-how-it-works-h2"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
          >
            {HOME_HOW_IT_WORKS.h2}
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {/* Step 1 — lead wide */}
          <article className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card dark:border-brand-dark-border dark:bg-brand-dark-surface md:p-8">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-primary dark:text-brand-dark-primary">
              Step {HOME_HOW_IT_WORKS.steps[0].n}
            </p>
            <p className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-text dark:text-brand-dark-text">
              {HOME_HOW_IT_WORKS.steps[0].title}
            </p>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {HOME_HOW_IT_WORKS.steps[0].body}
            </p>
          </article>

          {/* Steps 2 + 3 — 2-col row */}
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[HOME_HOW_IT_WORKS.steps[1], HOME_HOW_IT_WORKS.steps[2]].map(
              (step) => (
                <li
                  key={step.n}
                  className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 dark:border-brand-dark-border dark:bg-brand-dark-surface"
                >
                  <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-primary dark:text-brand-dark-primary">
                    Step {step.n}
                  </p>
                  <p className="mt-3 font-display text-lg font-bold tracking-tight text-brand-text dark:text-brand-dark-text">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                    {step.body}
                  </p>
                </li>
              ),
            )}
          </ul>

          {/* Step 4 — wide row */}
          <article className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card md:p-8 dark:border-brand-dark-border dark:bg-brand-dark-surface">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-primary dark:text-brand-dark-primary">
              Step {HOME_HOW_IT_WORKS.steps[3].n}
            </p>
            <p className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-text dark:text-brand-dark-text">
              {HOME_HOW_IT_WORKS.steps[3].title}
            </p>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {HOME_HOW_IT_WORKS.steps[3].body}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
