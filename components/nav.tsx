"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/copy";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

/**
 * Sticky top navigation per VISUAL_SPEC §C.3.
 * - sticky top-0 z-40
 * - Translucent bg + blur; hairline border; toggles shadow-nav on scrollY > 8
 * - Right side: dark-mode toggle + primary CTA "Book appointment" (per spec C.3)
 *   Here we use the brand's primary CTA from COPY_BRIEF §2 — "Book on Booksy →"
 * - Mobile (<768px): hide the horizontal link list, show a hamburger that
 *   opens a full-screen drawer.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on route change (Escape key + click outside).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-40 border-b bg-brand-bg transition-colors duration-200 dark:bg-brand-dark-bg",
        "supports-[backdrop-filter]:bg-brand-bg",
        "",
        scrolled
          ? "border-brand-border shadow-nav dark:border-brand-dark-border"
          : "border-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-container items-center justify-between px-6 py-3 md:px-8"
      >
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-brand-text dark:text-brand-dark-text"
        >
          Northside Fade Co.
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-body text-sm font-medium text-brand-text transition-colors duration-200 hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center bg-brand-primary px-5 py-2.5 rounded font-body text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
          >
            Book on Booksy →
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text md:hidden dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={22}
              height={22}
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-brand-border bg-brand-bg dark:border-brand-dark-border dark:bg-brand-dark-bg"
        >
          <ul className="mx-auto flex max-w-container flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-3 font-body text-base font-medium text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full bg-brand-primary px-5 py-3 rounded font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:bg-brand-dark-primary dark:text-brand-dark-bg dark:hover:bg-brand-dark-primary-hover"
              >
                Book on Booksy →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
