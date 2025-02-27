import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-radial-gradient": `
          linear-gradient(0deg, var(--white, #FFFFFF), var(--white, #FFFFFF)),
          radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 72%, rgba(0, 0, 0, 0.2) 100%)
        `,
      },
      background: {},
      boxShadow: {
        touch: "4px 4px 20px 0px #FFFFFF inset, 0px 0px 10px 5px #FFFFFF40",
      },
      dropShadow: {
        text: "0px 4px 4px #00000080",
      },
      colors: {
        primaryblue: "#182649",
        primaryGrey: "#757e87",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        th: ["cloud", "sans-serif"],
        en: ['"Source Serif 4"', "serif"],
        tan_mon: ["tan-mon-cheri", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        dissolve: "dissolve 0.3s ease-in-out",
        rotate: "rotate 1s linear ",
        dissolve_slow: "dissolve 2s ease-out",
      },

      keyframes: {
        dissolve: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        sm: { raw: "(max-height: 667px)" },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
