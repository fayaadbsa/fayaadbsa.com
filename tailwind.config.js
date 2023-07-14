const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./src/styles/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4.5xl": [
          "2.625rem",
          {
            lineHeight: "2.5rem",
          },
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      dropShadow: {
        "fx-soft": "0px 0px 15px rgba(255, 187, 20, 0.8)",
      },
      boxShadow: {
        "fx-yellow": `0 8px 12px -8px ${colors["fx-yellow"]}`,
      },
    },
  },
  plugins: [],
};
