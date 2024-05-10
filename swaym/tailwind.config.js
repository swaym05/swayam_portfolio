/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-custom": "#111623",
        "text-custom": "#ff5e62",
      },
    },
  },
  plugins: [],
};
