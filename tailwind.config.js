module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#214168",
        secondary: "#EF8354",
      },
      spacing: {
        100: "30rem",
        104: "38rem",
      },
    },
    fontFamily: {
      sans: ["Roboto"],
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
};