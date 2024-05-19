/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39D84A",
        "red": "#FF6868",
        "secondary": "#555",
        "PRIMARYbg": "#FCFCFC"
      }
    },
  },
  plugins: [require("daisyui")],
}

