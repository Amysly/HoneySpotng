/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#fffaf0',
        'custom-text': '#4a2c0a',
        'custom-button': '#ffc107',
      },
    },
  },
  plugins: [],
}