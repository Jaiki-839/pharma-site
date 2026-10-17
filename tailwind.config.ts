import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F5C5E",
        secondary: "#16807B",
        bg: "#F1F6F4",
        "bg-alt": "#E7F0ED",
        surface: "#FFFFFF",
        border: "#DCE8E4",
        "text-main": "#172A2A",
        "text-sub": "#647575",
        accent: "#D9A441",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "14px",
        xl: "18px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(23, 42, 42, 0.06)",
        card: "0 4px 20px rgba(23, 42, 42, 0.06)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
