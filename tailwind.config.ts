import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        panel: "hsl(var(--panel))",
        "panel-strong": "hsl(var(--panel-strong))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-2": "hsl(var(--accent-2))",
        "accent-3": "hsl(var(--accent-3))",
        success: "hsl(var(--success))",
      },
      fontFamily: {
        sans: ["var(--font-display)", "Space Grotesk", "Avenir Next", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "radial-shell":
          "radial-gradient(circle at top, rgba(55, 216, 255, 0.16), transparent 38%), radial-gradient(circle at 80% 0%, rgba(28, 255, 162, 0.14), transparent 28%)",
        "hero-mesh":
          "linear-gradient(135deg, rgba(55, 216, 255, 0.14), transparent 35%), radial-gradient(circle at 30% 30%, rgba(28, 255, 162, 0.14), transparent 20%), radial-gradient(circle at 70% 20%, rgba(119, 135, 255, 0.12), transparent 24%)",
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(103,232,249,0.18), 0 20px 60px rgba(3, 11, 28, 0.55), 0 0 50px rgba(34, 211, 238, 0.12)",
      },
      keyframes: {
        blink: {
          "0%, 45%, 100%": { opacity: "1" },
          "55%, 95%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "grid-drift": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(0, -24px, 0)" },
        },
        "pulse-border": {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(103,232,249,0.16)" },
          "50%": { boxShadow: "0 0 0 1px rgba(103,232,249,0.3), 0 0 34px rgba(52, 211, 153, 0.12)" },
        },
        "scan-sheen": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 7s ease-in-out infinite",
        "grid-drift": "grid-drift 14s linear infinite",
        "pulse-border": "pulse-border 3s ease-in-out infinite",
        "scan-sheen": "scan-sheen 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
