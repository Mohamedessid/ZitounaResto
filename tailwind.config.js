/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '22': '5.5rem', // Custom width
      },
      height: {
        '50': '12.5rem', // Custom height
      },
    },
  },
  plugins: [],
};
