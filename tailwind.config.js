/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: '#0093cd', 
        customgray:"#70777a",
        customGray:"#edf1f2",
        customgrayy:"#edf1f2",
        customgray2:"#edf1f2",
        customgray3:"#e1e4e5"
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
}
