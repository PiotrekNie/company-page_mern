const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1200px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    fontFamily: {
      sans: ["League Spartan", "Arial", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      indigo: "#489698",
      white: colors.white,
      black: colors.black,
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: "#fecd4d",
        },
        green: {
          DEFAULT: "#b4c851",
        },
        gray: {
          DEFAULT: "#0b0c11",
        },
      },
      textColor: {
        primary: colors.black,
        secondary: colors.indigo,
        success: colors.green,
      },
      zIndex: {
        "-10": -10,
        999: 999,
      },
      maxWidth: {
        min: "min-content",
        max: "max-content",
        xxs: "15.5rem",
      },
      height: {
        90: "22.5rem",
        full: "100%",
      },
      inset: {
        "-6": "-1.5rem",
      },
      fontSize: {
        "4xl": "2rem",
      },
      container: {
        center: true,
      },
      letterSpacing: {
        widest: "0.5em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
