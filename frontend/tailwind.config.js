/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0b2559", foreground: "#ffffff" }, // navy
        accent: { DEFAULT: "#dc2626", foreground: "#ffffff" }, // đỏ
        surface: "#f8fafc", // slate-50 nền
      },
    },
  },
  plugins: [],
};
