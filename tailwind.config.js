/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      fontFamily: {
        "rubik-one": "'Rubik One'",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      "5xl": "1.5rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
