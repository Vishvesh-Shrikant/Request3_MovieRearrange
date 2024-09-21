/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#102E4A"
      },
      rotate:{
        "135":"135deg",
        "225": "225deg",
        "270":"270deg",
        "315":"315deg"
      },
      animation:{
        "spinner":"spin 3s linear infinite"
      },
      aspectRatio:{
        '3/4':'3/4'
      }
    },
  },
  plugins: [],
}