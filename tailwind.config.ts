import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        toBottom: 'toBottom .4s cubic-bezier(0, 0, 0.07, 1)'
      },
      keyframes: {
        toBottom: {
          '0%': { scale: '1', transform: 'rotate(0deg)' },
          '100%': { scale: '1.2', transform: 'rotate(360deg)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
export default config;
