import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      textDecoration: ["responsive", "hover", "focus", "active", "group-hover"],
      colors: {
        primary: {
          500: "#624CF5",
          50: " #F6F8FD",
          DEFAULT: "#624CF5",
          foreground: "hsl(var(--primary-foreground))",
        },
        "underline-color": "#ffffff",
        white: {
          1: "#FAFDFE",
          2: "#FFFFFF80",
        },
        blue: {
          1: "#007C9EE0",
          2: "#BBDCE5B2",
          3: "#3F9CB6",
          4: "#007C9E",
          5: "#BBDCE5A3",
        },
        orange: {
          1: "#E9804F",
        },
        grey: {
          1: "#00000087",

          600: "#545454", // Subdued - color name in figma
          500: "#757575",
          400: "#AFAFAF", // Disabled - color name in figma
          50: "#F6F6F6", // White Grey - color name in figma
        },
        overflow: {
          "wrap-break": "break-word",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "dotted-pattern": "url('/images/dotted-pattern.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
