/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D2AC5A",
        lightGold: "#D7B367",
        black1: "#464646",
        darkGray: "#7E7E7E",
        lightGray: "#999999",
        mediumGray: "#7E7E7E",
        black2: "#2E2E2E",
        darkRed: "#800000",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        italiana: ["Italiana", "serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {},
      fontSize: {},
      fontStyle: {},
      keyframes: {
        planeWiggle: {
          "0%, 100%": {
            transform: "rotate(10deg)",
            color: "#FFA500",
          },
          "50%": {
            transform: "rotate(-10deg)",
            color: "#024575",
          },
        },
        blinkTwice: {
          "0%, 100%": { opacity: 1 },
          "25%": { opacity: 0 },
          "50%": { opacity: 1 },
          "75%": { opacity: 0 },
        },
      },
      animation: {
        planeWiggle: "planeWiggle 3s ease-in-out infinite",
        blinkTwice: "blinkTwice 1s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
