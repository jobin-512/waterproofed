/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#e6f7ff',
          100: '#b3e8ff',
          200: '#80d9ff',
          300: '#4dcaff',
          400: '#1abbff',
          500: '#00A7E8', // Main brand color
          600: '#0095d1',
          700: '#0083ba',
          800: '#0071a3',
          900: '#005f8c',
        }
      }
    },
  },
  plugins: [],
} 