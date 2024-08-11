/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#020006',
        'charcoal': '#030309',
        'ocean': '#90c2f5',
        'carmine': '#cb1140',
        'peach': '#ffac85',
        'purple': '#281DF7',
        'ice': '#bbffff',
        'white': '#f2f2f2'
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        forum: ['"Forum"', "serif"]
      },
    },
  },
  plugins: [],
}