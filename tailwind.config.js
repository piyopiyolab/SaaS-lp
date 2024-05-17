/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ["Poppins", 'sans-serif']
      },
      colors: {
        'c-dark': "#2B2B2B",
        'c-accent': "#F8D57E",
        'c-accent-2': "#FDF5DF",
        'c-primary': "#E5E5E5",
        'c-secondary': "#898585",
        'c-darkLight': "#333333"
      }
    },
  },
  plugins: [],
}