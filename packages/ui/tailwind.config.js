/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,jsx,ts,tsx}", // This targets all the .tsx files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
