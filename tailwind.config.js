/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}" // ensures nested folders are scanned
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