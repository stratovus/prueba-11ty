/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,html,js}"],
  theme: {
    extend: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
}
