// postcss.config.cjs
module.exports = {
  plugins: {
    // ← this is the special entry point for Tailwind’s PostCSS plugin
    'tailwindcss/postcss': {},
    autoprefixer: {},
  },
}