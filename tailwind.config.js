/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#415167",
        menu: "#EDF0F5"
      },
      fontFamily: {
        'nunito-bold': ['Nunito-Bold'],
        'nunito-light': ['Nunito-Light'],
        'nunito-semibold': ['Nunito-Semibold'],
        'mon-black': ['Montserrat-Black'],
      }
    },
  },
  plugins: [],
}
