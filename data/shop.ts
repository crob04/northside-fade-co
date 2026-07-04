/**
 * Shop data (operator-blank).
 * Every field falls back to honest placeholder copy.
 * No fabricated addresses, hours, or phone numbers.
 */

export const SHOP = {
  name: "Northside Fade Co.",
  /** Operator-blank address. Renders as the brief's "confirm with operator"
   *  placeholder rather than a guessed street + city. */
  address: {
    street: "123 Main St — confirm with operator",
    cityStateZip: "Anytown, US — confirm with operator",
    /* The full address string is composed at the call site so the formatter
     *  stays in control. */
  },
  /** Operator-blank hours. Renders 7 dashes to keep the table honest. */
  hours: [
    { day: "Mon", open: "" },
    { day: "Tue", open: "" },
    { day: "Wed", open: "" },
    { day: "Thu", open: "" },
    { day: "Fri", open: "" },
    { day: "Sat", open: "" },
    { day: "Sun", open: "" },
  ] as Array<{ day: string; open: string }>,
  /** Operator-blank phone. Renders as plain "confirm with operator". */
  phone: "(555) 000-0000 — confirm with operator",
  /** Booking provider is operator-blank. Default destination is /contact
   *  per COPY_BRIEF §2 — page compiles without operator input. */
  bookingProvider: {
    label: "Booksy",
    /** Operator-blank destination — Default to /contact for the CTA wire. */
    destination: "/contact",
  },
} as const;
