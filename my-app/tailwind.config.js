/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        none: "none",
        all: "all",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        transform: "transform",
      },
    },
  },
  plugins: [],
};

