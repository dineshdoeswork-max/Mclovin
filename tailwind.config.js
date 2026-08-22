/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2f2f7',
          100: '#e5e5ea',
          500: '#000000',
          900: '#1c1c1e',
        }
      }
    },
  },
  plugins: [],
}
