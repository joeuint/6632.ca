/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}', // adjust as needed
  ],
  theme: {
    extend: {
      screens: {
        xs: '25rem', // 400px - matches the CSS custom property
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  safelist: ['font-manrope'],
  plugins: [],
};
