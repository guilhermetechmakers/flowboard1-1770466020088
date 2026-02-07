/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(11, 99, 255)",
          foreground: "rgb(255, 255, 255)",
          hover: "rgb(9, 79, 200)",
        },
        accent: "rgb(23, 185, 120)",
        warning: "rgb(255, 176, 32)",
        destructive: "rgb(224, 36, 36)",
        background: "rgb(255, 255, 255)",
        foreground: "rgb(11, 27, 43)",
        muted: {
          DEFAULT: "rgb(246, 248, 250)",
          foreground: "rgb(90, 106, 120)",
        },
        border: "rgb(230, 233, 238)",
        card: {
          DEFAULT: "rgb(255, 255, 255)",
          muted: "rgb(246, 248, 250)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "hero": ["48px", { lineHeight: "1.2" }],
        "h2": ["32px", { lineHeight: "1.2" }],
        "h3": ["20px", { lineHeight: "1.2" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(11, 27, 43, 0.08)",
        "card-hover": "0 4px 12px rgba(11, 27, 43, 0.12)",
        glow: "0 0 0 2px rgba(11, 99, 255, 0.3)",
      },
      borderRadius: {
        button: "6px",
        card: "8px",
        input: "6px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        shimmer: "shimmer 1.5s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
