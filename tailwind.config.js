/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-opentype')
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ['selector', '[data-theme="dark"]'],
}