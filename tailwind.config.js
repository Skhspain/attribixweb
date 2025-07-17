// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},  // ← the new PostCSS‐only package
    autoprefixer: {},
  },
};