/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
        red: "#E38B29",
        orange: "#FFA500",
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
