// postcss.config.js
module.exports = {
  plugins: {
    // this is the PostCSS “bridge” into Tailwind’s engine
    '@tailwindcss/postcss': {},
    // autoprefixer is still its own plugin
    autoprefixer: {},
  },
}