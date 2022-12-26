const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        hand: ["Patrick Hand", ...defaultTheme.fontFamily.mono],
        mono: ["Chivo Mono", ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        outline: `0px 0px 3px rgba(0, 0, 0, 0.5)`,
      },
    },
  },
  plugins: [],
};
