import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#020617",
          raised: "#0b1224",
        },
        ink: {
          DEFAULT: "#f8fafc",
          muted: "#94a3b8",
          subtle: "#64748b",
        },
        accent: {
          DEFAULT: "#0ea5e9",
          soft: "#38bdf8",
        },
        teal: {
          DEFAULT: "#2dd4bf",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
        prose: "70ch",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(14,165,233,0.35), 0 8px 40px -8px rgba(14,165,233,0.45)",
        ring: "0 0 0 1px rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(2,6,23,0) 0%, rgba(2,6,23,1) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
