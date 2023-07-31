module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A400: "#00daf7" },
        red: { 400: "#de6944" },
        light_blue: { 400: "#1abcfe" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_84": "#00000084" },
        green: { 500: "#4caf50", A400: "#0acf83", A700: "#07ad36" },
        gray: {
          50: "#faf8f8",
          100: "#f5f5f5",
          200: "#ececec",
          300: "#dadada",
          400: "#b9b9b9",
          600: "#696f79",
          800: "#4b5548",
          "200_01": "#eeeef0",
          "200_96": "#ececec96",
        },
        deep_orange: { 300: "#ff7262", 600: "#f24e1e", A400: "#ff3d00" },
        deep_purple: { A200: "#a259ff" },
        blue_gray: { 400: "#8591a5", "400_7f": "#8591a57f" },
        blue: { 700: "#1976d2", "700_01": "#1976d2" },
        amber: { 500: "#ffc107" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", gayathri: "Gayathri", inter: "Inter" },
      boxShadow: {
        bs: "0px 15px  40px 5px #ececec",
        bs1: "4px 4px  4px 3px #ececec96",
        bs2: "0px 10px  30px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
