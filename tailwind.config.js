module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00040f",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
