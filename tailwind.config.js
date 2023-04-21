/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Pro", "serif"],
      },
      colors: {
        "dark-blue": "#465573",
        "medium-blue": "#7187B1",
        "light-blue": "#89A8E4",
        "super-light-blue": "#A1C1FF",
      },
    },
  },
  plugins: [],
};
