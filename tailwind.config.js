module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#214168",
        secondary: "#EF8354",
      },
      spacing: {
        100: "30rem",
        104: "38rem",
        120: "46rem"
      },
    },
    fontFamily: {
      sans: ["Roboto"],
      mont: ["Montserrat"]
    }
  },
  plugins: [require("flowbite/plugin")],
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
      translate: ['group-hover']
    },
  },
  
};
