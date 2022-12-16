/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': '#293042',
        'secondary': '#E31E24'
      }
    },
  },
  plugins: [],
}