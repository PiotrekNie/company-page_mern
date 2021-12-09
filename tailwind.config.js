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
      sans: ["Poppins", "Arial", "sans-serif"],
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
          500: "#d3da24",
          DEFAULT: "#b4c851",
        },
        gray: {
          100: "#fafafa",
          400: "#cccccc",
          600: "#959595",
          700: "#616161",
          800: "#3a3a3a",
          DEFAULT: "#0b0c11",
        },
        yellow: {
          DEFAULT: "#fecd4d",
        },
        blue: {
          DEFAULT: "#00aeef",
        },
        purple: {
          DEFAULT: "#00aeef",
        },
        azure: {
          DEFAULT: "#48ede0",
        },
        red: {
          DEFAULT: "#ef647b",
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
      minHeight: {
        9: "9rem",
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
        xxs: "0.563rem",
        "4xl": "2rem",
        "5xl": "2.6rem",
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
