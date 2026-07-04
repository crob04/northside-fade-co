import type { Config } from "tailwindcss";

// Visual spec SECTION A — verbatim extension block.
// Both light + dark palettes are defined; both must be implemented.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F7F4EF",
          surface: "#FFFFFF",
          text: "#1A1815",
          muted: "#6B6560",
          border: "#E5E0D8",
          primary: "#C2410C",
          "primary-hover": "#9A330A",
          accent: "#1A1815",
        },
        "brand-dark": {
          bg: "#13110F",
          surface: "#1C1916",
          text: "#EDEAE5",
          muted: "#8A8580",
          border: "#2A2622",
          primary: "#E2623A",
          "primary-hover": "#F47A52",
          accent: "#EDEAE5",
        },
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(26 24 21 / 0.04), 0 1px 3px 0 rgb(26 24 21 / 0.06)",
        "card-hover":
          "0 4px 12px -2px rgb(26 24 21 / 0.08), 0 2px 6px -1px rgb(26 24 21 / 0.06)",
        nav: "0 1px 0 0 rgb(26 24 21 / 0.04)",
      },
      maxWidth: {
        container: "76rem",
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
