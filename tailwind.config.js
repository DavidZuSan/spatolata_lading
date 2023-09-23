/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        italianno: ["Italianno", "cursive"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        menuText: "#8C1B24", // Texto Menú
        background: "#F2F2F2", // Fondo
        navbar: "#F2E0BD", // Menú (color del Navbar)
        bodyText: "#333333", // Texto normal
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
