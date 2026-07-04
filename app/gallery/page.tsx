import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GALLERY_PAGE } from "@/data/copy";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from the chair. Fades, tapers, lineups, beard trims, and hot towel shaves done at Northside Fade Co.",
};

/**
 * Gallery page — VISUAL_SPEC §D.2 + §E.4 + §F-30.
 *   2-col mobile, 3-col tablet, 4-col desktop.
 *   Captions use audience vocabulary per COPY_BRIEF §6.1.
 *
 * Gallery uses twelve slots — three of which deliberately reuse images on
 * disk given the 10-asset cap from research/VALIDATED_IMAGES.md.
 */
export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-section-sm md:py-section-md">
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="max-w-prose">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-6xl dark:text-brand-dark-text">
              {GALLERY_PAGE.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted md:text-xl dark:text-brand-dark-muted">
              {GALLERY_PAGE.byline}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section
        id="gallery"
        aria-label="Photo gallery"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {GALLERY_PAGE.images.map((img, i) => (
              <li
                key={`${img.src}-${i}`}
                className="group relative aspect-square overflow-hidden rounded-md border border-brand-border bg-brand-surface shadow-card transition-shadow duration-200 hover:shadow-card-hover dark:border-brand-dark-border dark:bg-brand-dark-surface"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
                <p className="absolute inset-x-0 bottom-0 z-10 bg-black px-3 py-2 font-body text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {img.caption}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing block */}
      <section
        aria-labelledby="gallery-closing-h3"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-prose px-6 text-center md:px-8">
          <h3
            id="gallery-closing-h3"
            className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text"
          >
            {GALLERY_PAGE.closing.h3}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
            {GALLERY_PAGE.closing.body}
          </p>
          <div className="mt-8">
            <Link
              href={GALLERY_PAGE.closing.cta.href}
              className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
            >
              {GALLERY_PAGE.closing.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
