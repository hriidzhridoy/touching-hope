import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette — El Pescadero coastline (teal), farmland &
        // hope-tree leaves (green), sun & the logo's cross (orange).
        leaf: {
          50: "#EFF7F1",
          100: "#E3F0E7",
          200: "#BFE0CB",
          500: "#4C9A6A",
          600: "#358F63",
          700: "#2A7852",
          800: "#1F5C42",
          900: "#153A28",
          950: "#0F2B1E",
        },
        sun: {
          50: "#FDF3E7",
          100: "#FCE8D2",
          400: "#F4A94A",
          500: "#F0913A",
          600: "#E2760F",
          700: "#C15E12",
        },
        tide: {
          600: "#2B7A8C",
          700: "#215F6E",
        },
        sand: {
          50: "#FAF6EE",
          100: "#F5EFDF",
        },
        ink: {
          700: "#2B3A32",
          900: "#16241D",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "rows-pattern":
          "repeating-linear-gradient(115deg, rgba(31,92,66,0.06) 0px, rgba(31,92,66,0.06) 2px, transparent 2px, transparent 26px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grow-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "grow-in": "grow-in 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
