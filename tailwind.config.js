/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/pages/*.{ts,tsx}",
    "./src/components/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        bg: {
          primary: "rgba(0,0,0,0.9)",
          secondary: 'rgba(0,0,0,0.8)'
        },
        text: {
          secondary: '#A5A5A5',
          primary: "#fff"
        },
        emphasis:{
          primary: '#6EEB83'

        },
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
