"use client";

import { useEffect, useState } from "react";

/**
 * Icon-only dark-mode toggle per VISUAL_SPEC §C.10.
 * - 44×44px touch target.
 * - aria-label = "Toggle dark mode".
 * - Persists to localStorage[ "northside-theme"]; default = system prefers-color-scheme.
 * - Hydration-safe: the icon shown at render time reflects post-mount state.
 */
export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the value the inline theme bootstrap set on <html>.
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("northside-theme", next ? "dark" : "light");
    } catch {
      /* ignore — privacy mode */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={mounted ? isDark : undefined}
      className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded text-brand-text transition-colors duration-200 hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text dark:text-brand-dark-text dark:hover:bg-brand-dark-surface"
    >
      {/* Render the post-mount icon on the server as a placeholder span, then
          swap to the correct icon after mount. This avoids hydration mismatch
          warnings — both icons render the same until mount completes. */}
      {mounted && isDark ? (
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
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
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
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
