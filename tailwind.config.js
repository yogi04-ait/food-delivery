/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    extend: {
      borderColor: {
        "custom-gray": "rgba(0, 0, 0, 0.178)",
      },
    },
  },
  plugins: [],
};
