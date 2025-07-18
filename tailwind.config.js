// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",    // your App Router
    "./src/pages/**/*.{js,ts,jsx,tsx}",  // if any
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--brand-primary)",
        "brand-accent":  "var(--brand-accent)",
      },
    },
  },
  plugins: [],
}