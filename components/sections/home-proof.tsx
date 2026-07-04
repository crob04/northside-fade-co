import Link from "next/link";
import Image from "next/image";
import { HOME_PROOF } from "@/data/copy";

/**
 * Home §PROOF — editorial split layout per VISUAL_SPEC §C.5.
 *
 * F-02 forbids a symmetric 3-col feature grid. The portraits here are part
 * of an editorial split (text on the left, photos on the right). To stay
 * inside the spec, the photos themselves use a 2-col asymmetric stack:
 *
 *   Row 1: 1 wide portrait (md:col-span-2 of md:grid-cols-2)
 *   Row 2: 2 portraits side-by-side (md:grid-cols-2)
 *
 * We have 3 portraits; this layout reads as a visual collage rather than a
 * 3-up feature grid. The section title + body + CTAs are on the left.
 *
 * Per COPY_BRIEF §3.4 — no fabricated reviews. The section renders an honest
 * "Read reviews on our booking page →" CTA rather than invented testimonials.
 */
export function HomeProof() {
  return (
    <section
      id="proof"
      aria-labelledby="home-proof-h2"
      className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
    >
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
              {HOME_PROOF.eyebrow}
            </p>
            <h2
              id="home-proof-h2"
              className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
            >
              {HOME_PROOF.h2}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {HOME_PROOF.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={HOME_PROOF.primaryCta.href}
                className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
              >
                {HOME_PROOF.primaryCta.label}
              </Link>
              <Link
                href={HOME_PROOF.secondaryCta.href}
                className="inline-flex items-center justify-center border border-brand-border bg-transparent px-6 py-3 rounded font-body text-base font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
              >
                {HOME_PROOF.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {/* Row 1: 1 wide portrait (md:col-span-2 of md:grid-cols-2) */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative aspect-[2/1] overflow-hidden rounded-md border border-brand-border bg-brand-surface shadow-card md:col-span-2 dark:border-brand-dark-border dark:bg-brand-dark-surface">
                  <Image
                    src={HOME_PROOF.portraits[0].src}
                    alt={HOME_PROOF.portraits[0].alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 58vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Row 2: 2 portraits side-by-side */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {HOME_PROOF.portraits.slice(1).map((p, i) => (
                  <div
                    key={`${p.src}-${i}`}
                    className="relative aspect-square overflow-hidden rounded-md border border-brand-border bg-brand-surface shadow-card dark:border-brand-dark-border dark:bg-brand-dark-surface"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 29vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
