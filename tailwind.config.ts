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
        grey: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        blue: {
          200: "#4EA8DE",
          500: "#1E6F9F",
        },
        purple: {
          200: "#8284FA",
          500: "#5E60CE",
        },
      },
      height: {
        200: "200px",
      },
    },
  },
  plugins: [],
};
export default config;
