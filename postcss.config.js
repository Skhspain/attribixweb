// postcss.config.js
module.exports = {
  plugins: {
    // ← this **must** point at the new PostCSS plugin
    '@tailwindcss/postcss': {},
    // autoprefixer stays the same
    autoprefixer: {},
  },
};