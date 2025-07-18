// postcss.config.cjs
module.exports = {
  plugins: {
    // ← the **new** PostCSS plugin for Tailwind v4
    '@tailwindcss/postcss': {},
    // ← still need autoprefixer
    autoprefixer: {},
  },
}