// tailwind.config.js
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // only if you need to tweak default violet
        violet: {
          600: "#7c3aed",
        },
      },
    },
  },
  plugins: [],
};
