/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#FF6363",
        'secondary':"#373A40",
        'blackBG':"#FFFAE6",
        'Favourite':"#D10363"
      },
      fontFamily:{
        'primary':['PT Sans', 'sans-serif'],
        'secondary':[ 'Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}