/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // required for toggle
  theme: {
    extend: {
      colors: {
        dark: "#1d1d1f",
        light: "#f5f5f7",
        grayText: "#6e6e73",
      },
    },
  },
  plugins: [],
};




