/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        green: "#82D9CF",
        "dark-green": "#63A69E",
        gray: "#6C757D",
      },
      borderColor: {
        "dark-green": "#63A69E",
        green: "#82D9CF",
      },
      borderRadius: {
        "6xl": "3rem",
      },
      colors: {
        "dark-green": "#63A69E",
        pink: "#D998D5",
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
