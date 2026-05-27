/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'SlateBlue' : '#0f172a',
        'DarkerBlue' : '#081D36',
        'DarkBlue' : '#13315C',
        'BrightBlue' : '#8DA9C4',
        'CreamWhite' : '#EEF4ED',
        'darkBg': '#0a0a0a',
        'darkCard': '#171717',
        'lightBg': '#e2e8f0',
        'lightCard': '#f1f5f9',
        'accent': '#0087d4',
      }
    },
  },
  plugins: [],
}