/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "orange-mist": "#FAF8F6",
      "orange-dark": "#E8D5C5",
      "black-dark": "#0D0D0D",
      white: "#fff",
      "green-bright": "#00AA45",
      "green-dark": "#219653",
    },
    maxWidth: {
      screen: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
