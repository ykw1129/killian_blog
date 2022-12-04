/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:'class',
  content: [
      "./src/pages/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      'main':'rgb(59, 73, 223)'
    },
  },
  plugins: [],
}
