/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': 'Roboto, Helvetica, Arial, sans-serif'
    },
    extend: {
      screens: {
        'sm': '712px',
        'lg': '1086px',
      },
      colors: {
        "light-100": "#F8F8FB",
        "lost": "#ba2929",
        "winner": "#5aa13d",
        "tie": "#db611a",
        "primary-100": "#9277FF",
        "primary-200": "#7C5DFA",
        "neutral-200": "#DFE3FA",
      },
      height: {
        '50screen': '50vh',
        '60screen': '60vh',
      }
    },
  },
  plugins: [],
}

