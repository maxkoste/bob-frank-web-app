config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffc107', // amber
          dark: '#ff5722', // deep orange
        },
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      fontWeight: {
        semibold: 600,
      },
    },
  },
  plugins: [],
}