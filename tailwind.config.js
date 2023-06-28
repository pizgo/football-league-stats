/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-100": "#F8F8FB",
        "winner": "#ba2929",
        "lost": "#5aa13d",
        "tie": "#db611a",
        "primary-100": "#9277FF",
        "primary-200": "#7C5DFA",
      }
    },
  },
  plugins: [],
}

