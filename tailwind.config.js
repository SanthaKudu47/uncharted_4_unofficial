/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: "Nokora , sans-serif",
      },

      colors: {
        blue_dark: "#0E1115",
        blue_light: "#00A2FF",
        white_v1: "#E2E8EA",
      },
    },
  },
  plugins: [],
};
