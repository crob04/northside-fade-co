import Link from "next/link";
import { NOT_FOUND } from "@/data/copy";

/**
 * 404 page — COPY_BRIEF §10.5.
 */
export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-h1"
      className="mx-auto flex min-h-[60vh] max-w-prose flex-col items-center justify-center px-6 py-24 text-center md:px-8"
    >
      <h1
        id="not-found-h1"
        className="font-display text-5xl font-bold leading-tight tracking-tight text-brand-text md:text-6xl dark:text-brand-dark-text"
      >
        {NOT_FOUND.title}
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-brand-muted dark:text-brand-dark-muted">
        {NOT_FOUND.body}
      </p>
      <div className="mt-8">
        <Link
          href={NOT_FOUND.cta.href}
          className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
        >
          {NOT_FOUND.cta.label}
        </Link>
      </div>
    </section>
  );
}
