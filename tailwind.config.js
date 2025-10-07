/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'modern-negra': ['"Modern Negra"', 'sans-serif'],
        'sans': ['"Mona Sans"', 'sans-serif'],
        'serif': ['"DM Serif Text"', 'serif'],
      },
    },
  },
  plugins: [],
}