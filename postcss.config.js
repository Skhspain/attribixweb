// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},        // import other CSS files
    'postcss-nesting': {},       // enable nested rules
    '@tailwindcss/postcss': {},  // ← the Tailwind PostCSS plugin
    'autoprefixer': {},          // add vendor prefixes
  },
}