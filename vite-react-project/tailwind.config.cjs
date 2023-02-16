/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        transparent: "transparent",
        current: "currentColor",
        wheat: "#f7cfbe",
        cotton: "#c3bbb6",
        gull: "#9ab0be",
        summer: "#9abda9",
        dianne: "#234e59",
        dune: "#302c28",
        everglade: "#1f3d2e",
      },
    },
  },
  plugins: [],
};
