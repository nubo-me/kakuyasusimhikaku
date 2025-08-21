/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /(bg|text|from|to)-(blue|green|purple|orange|red)-(100|400|500|600|700)/ },
    { pattern: /(border)-(blue|green|purple|orange|red)-(400|500|600)/ }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

