/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-Bg': "url('./assets/imgs/Hero.png')",
        'grid-bg': "url('./assets/imgs/Big.png')",
      }
    },
  },
  plugins: [],
}