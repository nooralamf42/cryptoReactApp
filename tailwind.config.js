/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        "train" : "train linear 300s infinite"
      },
      keyframes : {
        "train" : {
          "0%" : {
            "transform" : 'translateX(0)'
          },
          "100%": {
            "transform" : 'translateX(-100%)'
          }
        } 
      }
    },
  },
  plugins: [],
}