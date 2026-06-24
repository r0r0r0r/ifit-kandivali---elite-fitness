/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#ccff00',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        brand: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
