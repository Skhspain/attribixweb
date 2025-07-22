// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},      // if you need to pull in other CSS files
    'postcss-nesting': {},     // if you use nested rules
    '@tailwindcss/postcss': {},// ← the new Tailwind PostCSS plugin
    autoprefixer: {},          // add vendor prefixes
  },
}