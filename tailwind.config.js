/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2D6FE5",
          "blue-dark": "#0B2A5B",
          aqua: "#4DD6C7",
          yellow: "#F4C400",
          muted: "#F6F7FB",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(11, 42, 91, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
