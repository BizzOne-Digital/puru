import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#06293A",
          50: "#0a3d56",
          100: "#083048",
          200: "#06293A",
          300: "#041e2b",
          400: "#02131c",
        },
        teal: {
          DEFAULT: "#2A8C8C",
          light: "#4DB8D5",
        },
        aqua: "#4DB8D5",
        green: {
          trade: "#3BAA70",
        },
        copper: "#D9683A",
        "soft-white": "#F8FAFC",
        "steel-grey": "#6B7280",
        "dark-text": "#111827",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #06293A 0%, #083048 50%, #0a3d56 100%)",
        "teal-copper": "linear-gradient(135deg, #2A8C8C, #D9683A)",
        "navy-teal": "linear-gradient(135deg, #06293A, #2A8C8C)",
      },
      animation: {
        "globe-rotate": "globe-rotate 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "trade-line": "trade-line 3s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
      },
      keyframes: {
        "globe-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "trade-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "glow-teal": "0 0 30px rgba(42, 140, 140, 0.3)",
        "glow-copper": "0 0 30px rgba(217, 104, 58, 0.3)",
        "glow-aqua": "0 0 30px rgba(77, 184, 213, 0.3)",
        "card-dark": "0 20px 60px rgba(0, 0, 0, 0.5)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
