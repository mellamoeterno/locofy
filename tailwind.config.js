/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "true-white": "#fff",
        "grey-100": "#fafafa",
        "grey-400": "#7c8db0",
        red: "#f50000",
      },
      fontFamily: {
        "body-default": "'Nunito Sans'",
      },
    },
    fontSize: {
      "13xl": "32px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
