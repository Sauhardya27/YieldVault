/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        'custom-size': '55px', // Adjust the value as needed
      },
      lineHeight: {
        'custom-loose': '1.3', // Adjust the value as needed
      },
      colors: {
        newPurple: "#6A0EB2",
        lightPurple: "#8246B2",
        newGold: "#FFA823",
        newTeal: "#219C90",
      },
      animation: {
        customBounce: 'customBounce 3s infinite', // Slower bounce animation
      },
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(-10%)' }, // Adjust the bounce height
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}