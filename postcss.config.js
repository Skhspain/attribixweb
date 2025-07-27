// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},           // support @import
    '@tailwindcss/postcss': {},     // the new PostCSS entrypoint for Tailwind
    autoprefixer: {},               // add vendor prefixes
    'postcss-nesting': {},          // optional nesting support
  },
};
