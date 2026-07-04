import { HOME_PROBLEM } from "@/data/copy";

/**
 * Home §THE PROBLEM — VISUAL_SPEC §C.5 / §D.1 §2.
 * Agitates the failure modes without pitching the fix. No mention of
 * Northside, services, or pricing (per COPY_BRIEF §3.1).
 * No section CTA.
 */
export function HomeProblem() {
  return (
    <section
      id="the-problem"
      aria-labelledby="home-problem-h2"
      className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="mx-auto max-w-prose">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-primary dark:text-brand-dark-primary">
            {HOME_PROBLEM.eyebrow}
          </p>
          <h2
            id="home-problem-h2"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
          >
            {HOME_PROBLEM.h2}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
            {HOME_PROBLEM.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
