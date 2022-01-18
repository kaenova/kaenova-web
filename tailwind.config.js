module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      heading: "0.305em",
      normal: "0.105em",
    },
    extend: {
      colors: {
        "white-template": "#F7F7F7",
        "black-template": "#353535",
      },
    },
  },
  plugins: [],
};
