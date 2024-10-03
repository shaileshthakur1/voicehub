import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#9333ea', // purple-600
          foreground: '#ffffff',
        },
      },
    },
  },
  darkMode: 'class', // This allows you to toggle dark mode with a class
  plugins: [],
};
export default config;
