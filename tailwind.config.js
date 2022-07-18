/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#415167",
        menu: "#EDF0F5",
        accent_dark: "#C7A17A",
        accent_light: "#F9F5E8",
        dark_gray: "#151D28",
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
