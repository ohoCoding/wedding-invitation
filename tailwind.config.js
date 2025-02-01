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
        default: "var(--font-default)", // 기본 폰트
        wedding: "var(--font-wedding)", // 웨딩 타이틀 폰트
      },
      colors: {
        "margin-bg": "var(--margin-bg-color)", // 마진 배경 색상
      },
    },
  },
  plugins: [],
};
