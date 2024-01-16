/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#483E7B",
        primaryDark: "#100742",
        orange: "#F25F29",
        orangeDark: "#8E2A05",
        pink: "#C04BF2",
        pinkDark: "#570A78",
        dark: "#17152A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(108deg, #23222B 18.5%, #07041A 50.5%, #151321 63.5%, #23222B 97.5%)",
        "gradient-pink":
          "linear-gradient(90deg, #5B43E3 -13.33%, rgba(196, 85, 179, 0.99) 31.2%, rgba(165, 80, 51, 0.97) 89.05%)",
        "gradient-orange":
          "linear-gradient(90deg, #DD5A22 -13.33%, rgba(14, 0, 40, 0.97) 89.05%)",
        "gradient-light":
          " linear-gradient(90deg, #D0E0EF 29%, #DEE1E8 65.5%, #EEEFF4 97.5%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
