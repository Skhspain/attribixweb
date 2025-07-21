// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    // instead of 'tailwindcss': {}
    '@tailwindcss/postcss': {},
    'postcss-nesting': {},
    autoprefixer: {},
  },
}