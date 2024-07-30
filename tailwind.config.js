/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#282727',
        darkGray: '#141414',
        iconGray : '#413e3e'
      },
    },
  },
  plugins: [],
}
