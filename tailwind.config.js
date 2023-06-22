/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      },
      maxWidth: '1200px'
    },
    colors: {
      'hibiscus': '#b94951',
      'toadstool': '#b82731',
      'stizza': '#870b0c',
      'dark': '#111',
      'stone': '#3D4351',
      'grey': '#999',
      'white': '#fff'
    },
    extend: {
      backgroundImage: {
        'footer-lace': "url('/lace.png')",
        'header-pattern': "url('/mask.png')",
      }
    },
  },
  plugins: [],
}

