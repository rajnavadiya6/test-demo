module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#0a3131",
        cyan_300: "#4bd2ce",
        black_900_6c: "#0000006c",
        teal_900: "#003845",
        white_A700: "#ffffff",
        gray_50: "#f9f9f9",
      },
      fontFamily: { livvic: "Livvic" },
      borderRadius: {
        radius6: "6px",
        radius15: "15px",
        radius18: "18px",
        radius20: "20px",
      },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
