/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards", 
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50px)",  filter: "blur(5px)" },
          // Étape intermédiaire pour un effet plus progressif
          "100%": { transform: "translateY(0)",  filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [],
};
