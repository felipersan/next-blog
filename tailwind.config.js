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
          primary: "#fff",
        },
        emphasis:{
          primary: '#6EEB83'

        },
      },
    },
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
