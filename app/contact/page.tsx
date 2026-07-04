import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_PAGE, STATES } from "@/data/copy";
import { SHOP } from "@/data/shop";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hours, address, walk-in policy, and contact form for Northside Fade Co. Walk in or book ahead.",
};

/**
 * Contact page — VISUAL_SPEC §D.2.
 *   Page title → address + hours + phone (two-column on desktop) →
 *   walk-in policy callout → contact form (C.8) →
 *   embedded map (optional — omitted per VISUAL_SPEC §E.5 "no image required") →
 *   final CTA.
 *
 * Forms use a mailto: action per the spec — no backend in scope. The operator
 * fills the shop email in SHOP.email when ready; until then the form surfaces
 * a code-side note explaining it opens the visitor's email client.
 */
export default function ContactPage() {
  const shopEmail = ""; // Operator-blank — populated from FACTS.json when ready.

  return (
    <>
      {/* Page header */}
      <section className="py-section-sm md:py-section-md">
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="max-w-prose">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-text md:text-6xl dark:text-brand-dark-text">
              {CONTACT_PAGE.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted md:text-xl dark:text-brand-dark-muted">
              {CONTACT_PAGE.byline}
            </p>
          </div>
        </div>
      </section>

      {/* Address + hours block */}
      <section
        aria-labelledby="contact-info-h2"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* Address + phone */}
            <div>
              <h2
                id="contact-info-h2"
                className="font-display text-2xl font-bold tracking-tight text-brand-text dark:text-brand-dark-text"
              >
                Find the shop.
              </h2>
              <div className="mt-6 space-y-6 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-text dark:text-brand-dark-text">
                    Address
                  </p>
                  <p className="mt-2 text-brand-text dark:text-brand-dark-text">
                    {CONTACT_PAGE.address.street}
                    <br />
                    {CONTACT_PAGE.address.cityStateZip}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-text dark:text-brand-dark-text">
                    Phone
                  </p>
                  <p className="mt-2 text-brand-text dark:text-brand-dark-text">
                    {CONTACT_PAGE.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours table */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-text dark:text-brand-dark-text">
                Hours
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-base">
                {CONTACT_PAGE.hours.map((h) => (
                  <li key={h.day} className="contents">
                    <span className="font-body text-sm font-medium text-brand-text dark:text-brand-dark-text">
                      {h.day}
                    </span>
                    <span className="font-body text-sm text-brand-muted dark:text-brand-dark-muted">
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-muted dark:text-brand-dark-muted">
                Hours confirmed with shop. Operator-blank — render as a
                &quot;Confirm with shop&quot; placeholder rather than
                fabricating hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Walk-in policy */}
      <section
        aria-labelledby="walk-in-h2"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="mx-auto max-w-prose">
            <h2
              id="walk-in-h2"
              className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
            >
              {CONTACT_PAGE.walkInPolicy.h2}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {CONTACT_PAGE.walkInPolicy.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form (mailto:) */}
      <section
        aria-labelledby="contact-form-h2"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-container px-6 md:px-8">
          <div className="mx-auto max-w-prose">
            <h2
              id="contact-form-h2"
              className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-text md:text-5xl dark:text-brand-dark-text"
            >
              {CONTACT_PAGE.formCopy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
              {CONTACT_PAGE.formCopy.intro}
            </p>

            {shopEmail ? (
              <form
                action={`mailto:${shopEmail}?subject=${encodeURIComponent(
                  "[Northside Fade Co.] Booking inquiry"
                )}`}
                method="post"
                encType="text/plain"
                className="mt-8 grid grid-cols-1 gap-4"
                aria-busy="false"
              >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                  >
                    {CONTACT_PAGE.formCopy.labels.name}
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    placeholder={CONTACT_PAGE.formCopy.placeholders.name}
                    className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-phone"
                    className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                  >
                    {CONTACT_PAGE.formCopy.labels.phone}
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    placeholder={CONTACT_PAGE.formCopy.placeholders.phone}
                    className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cf-email"
                  className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                >
                  {CONTACT_PAGE.formCopy.labels.email}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  placeholder={CONTACT_PAGE.formCopy.placeholders.email}
                  className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-service"
                    className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                  >
                    {CONTACT_PAGE.formCopy.labels.service}
                  </label>
                  <input
                    id="cf-service"
                    name="service"
                    type="text"
                    placeholder={CONTACT_PAGE.formCopy.placeholders.service}
                    className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-barber"
                    className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                  >
                    {CONTACT_PAGE.formCopy.labels.barber}
                  </label>
                  <input
                    id="cf-barber"
                    name="barber"
                    type="text"
                    placeholder={CONTACT_PAGE.formCopy.placeholders.barber}
                    className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-date"
                    className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                  >
                    {CONTACT_PAGE.formCopy.labels.date}
                  </label>
                  <input
                    id="cf-date"
                    name="date"
                    type="text"
                    placeholder={CONTACT_PAGE.formCopy.placeholders.date}
                    className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-time"
                    className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                  >
                    {CONTACT_PAGE.formCopy.labels.time}
                  </label>
                  <input
                    id="cf-time"
                    name="time"
                    type="text"
                    placeholder={CONTACT_PAGE.formCopy.placeholders.time}
                    className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cf-notes"
                  className="text-sm font-medium text-brand-text dark:text-brand-dark-text mb-1.5 block"
                >
                  {CONTACT_PAGE.formCopy.labels.notes}
                </label>
                <textarea
                  id="cf-notes"
                  name="notes"
                  rows={5}
                  placeholder={CONTACT_PAGE.formCopy.placeholders.notes}
                  className="bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-2 focus:outline-offset-1 focus:outline-brand-primary w-full dark:bg-brand-dark-surface dark:border-brand-dark-border dark:text-brand-dark-text dark:placeholder:text-brand-dark-muted"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
              >
                {CONTACT_PAGE.formCopy.submit}
              </button>
              <p className="mt-2 text-xs text-brand-muted dark:text-brand-dark-muted">
                {CONTACT_PAGE.formCopy.note}
              </p>
              <p className="sr-only" aria-live="polite">
                {STATES.loading}
              </p>
              </form>
            ) : (
              /* Operator-blank email — keep the form fields readable, but
                 show an honest "form not yet wired" placeholder instead of a
                 broken submit button. */
              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  {[...Array(2)].map((_, row) => (
                    <li
                      key={`row-${row}`}
                      className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    >
                      {[...Array(2)].map((__, col) => (
                        <div
                          key={`row-${row}-col-${col}`}
                          className="bg-brand-surface border border-brand-border rounded px-4 py-3 dark:bg-brand-dark-surface dark:border-brand-dark-border"
                        >
                          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
                            &nbsp;
                          </span>
                          <span className="block text-sm text-brand-muted dark:text-brand-dark-muted">
                            &nbsp;
                          </span>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-lg border border-brand-border bg-brand-surface p-6 shadow-card dark:border-brand-dark-border dark:bg-brand-dark-surface">
                  <p className="font-display text-lg font-bold text-brand-text dark:text-brand-dark-text">
                    Form coming with operator.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                    Until the shop email is configured, send a message by walking
                    in or calling ahead. The form on this page will start sending
                    to the shop&apos;s inbox once the operator adds an email address.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-brand-primary px-5 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
                    >
                      Walk in or book ahead →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <section
        aria-labelledby="contact-cta-h3"
        className="border-t border-brand-border py-section-sm md:py-section-md dark:border-brand-dark-border"
      >
        <div className="mx-auto max-w-prose px-6 text-center md:px-8">
          <h3
            id="contact-cta-h3"
            className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-text dark:text-brand-dark-text"
          >
            The chair is open.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
            Walk in or book ahead. We will fit you in.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CONTACT_PAGE.cta.primary.href}
              className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
            >
              {CONTACT_PAGE.cta.primary.label}
            </Link>
            <Link
              href={CONTACT_PAGE.cta.secondary.href}
              className="inline-flex items-center justify-center border border-brand-border bg-transparent px-6 py-3 rounded font-body text-base font-semibold text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text min-h-[44px] dark:border-brand-dark-border dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
            >
              {CONTACT_PAGE.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
