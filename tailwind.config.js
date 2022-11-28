/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/pages/*.{ts,tsx}",
    "./src/components/**/*.{js,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
