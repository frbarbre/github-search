/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "rgba(20,29,47, 1)",
        light: "rgba(246,248,255, 1)",
        "dim-blue": "rgba(30,42,71, 1)",
        "gray-blue": "rgba(105,124,154, 1)",
        blue: "rgba(0, 121, 255, 1)",
      },
      gridTemplateColumns: {
        info: "20px 100%",
      },
      boxShadow: {
        "3xl": "0 3px 6px rgba(0, 0, 0, 0.16)",
        "4xl": "0 3px 12px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
