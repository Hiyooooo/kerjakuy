import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "var(--color-coral)",
        amber: "var(--color-amber)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        "coral-ink": "var(--color-coral-ink)",
        "amber-ink": "var(--color-amber-ink)",
        paper: "var(--color-paper)",
        white: "var(--color-white)",
        line: "var(--color-line)",
        control: "var(--color-control)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
      },
      borderRadius: {
        control: "var(--radius-control)",
        chip: "var(--radius-chip)",
        card: "var(--radius-card)",
        bubble: "var(--radius-bubble)",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
