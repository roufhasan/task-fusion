/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 4px 35px 0px rgba(0, 0, 0, 0.08)",
        "4xl": "0px 4px 19px 0px rgba(119, 147, 65, 0.30)",
      },
    },
  },
  plugins: [],
};
