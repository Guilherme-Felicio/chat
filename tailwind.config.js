/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        green: "#82D9CF",
        gray: "#6C757D",
      },
      borderRadius: {
        "6xl": "3rem",
      },
      colors: {
        "dark-green": "#63A69E",
      },
      padding: {
        "pb-full": "100%",
      },

      textColor: {
        gray: "#6C757D",
      },
    },
  },
  plugins: [],
};
