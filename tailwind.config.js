/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro}", // make sure this matches your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
safelist: ['font-manrope'],
  plugins: [],
};
