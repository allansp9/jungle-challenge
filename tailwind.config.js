const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "360px",
      // => @media (min-width: 360px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#00A870",
        secondary: "#5E20A4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
