/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // wherever you keep your pages/components
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--brand-primary)',
        'brand-accent':  'var(--brand-accent)',
      },
    },
  },
  plugins: [],
};