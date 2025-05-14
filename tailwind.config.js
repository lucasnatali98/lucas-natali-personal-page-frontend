/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "#123": "#123",
        "#9ab": "#9ab",
        "#adf": "#adf",
        "#68a": "#68a",
      },
    },
  },
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  mode: "jit",
  plugins: [require("@tailwindcss/forms")],
};
