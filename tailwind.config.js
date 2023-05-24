/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg_1.jpg')",
      },
      colors: {
        black01: "#121618",
        "primary-yellow": "#fac564",
        "primary-brown": "#5c3d03",
        "primary-gray": "#808080",
      },
    },
  },
  plugins: [],
};
