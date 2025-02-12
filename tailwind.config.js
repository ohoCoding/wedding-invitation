/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: 'var(--font-default)', // 기본 폰트
        wedding: 'var(--font-wedding)', // 웨딩 타이틀 폰트
        parisienne: 'var(--font-parisienne)', // 파리지엔 타이틀 폰트
        pretendard: 'var(--font-pretendard)', // 프리텐다드 맵 폰트
      },
      colors: {
        'margin-bg': 'var(--margin-bg-color)', // 마진 배경 색상
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: { height: '0px', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-in',
      },
    },
  },
  plugins: [],
};
