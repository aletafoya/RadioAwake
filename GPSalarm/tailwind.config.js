/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#27C497",
        primaryTranslucent: "rgba(39, 196, 151, 0.8)",
        background: "#222423",
        mainText: "#FFFFFF",
        secondaryText: "#757575",
      }
    },
  },
  plugins: [],
}