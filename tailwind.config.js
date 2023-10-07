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
        burgundy: "#8C1B24", // Texto Menú
        darkgray: "#333333", // Texto normal
        highlightOrange: "#EE9322", // Texto Secundario
        background: "#F2F2F2", // Fondo
        navbar: "#E3D2B1", // Menú (color del Navbar)
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
