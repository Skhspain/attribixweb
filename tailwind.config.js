// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // tell Tailwind where to look for class names:
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}