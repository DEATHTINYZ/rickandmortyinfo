/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateIn: {
          'from': { transform: 'rotate(0deg) scale(0.2)', opacity: '0' },
          'to': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
        },
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
      }
    },
  },
  plugins: [],
}

