/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        batang: ["IropkeBatangM", "serif"], // 'batang' 클래스로 사용 가능
      },
    },
  },
  plugins: [],
};
