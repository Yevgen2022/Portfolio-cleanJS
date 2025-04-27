/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.html",
    "./pages/**/*.html",
    "./js/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },
    },
  },
  plugins: [],
}




// content: ["./**/*.{html,js}"],