module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "fx-white": "#FFFFFF",
        "fx-white-sec": "#F2F2F2",
        "fx-grey": "#959595",
        "fx-grey-dark": "#4F4F4F",
        "fx-black": "#191919",
        "fx-yellow": "#FFBB14",
        "fx-orange": "#FF8E2B",
        "fx-aqua": "#60D1C0",
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "sans-serif"],
        inter: ["Inter", "sans-serif"],
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
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
};
