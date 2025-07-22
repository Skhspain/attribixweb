// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // your custom colors, fonts, etc.
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms'),
  ],
}