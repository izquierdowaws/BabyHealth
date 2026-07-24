// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        'brand-bg': '#FAF7F4',
        'brand-text-heading': '#2A2A28',
        'brand-text-body': '#4A4946',
        'brand-trust': '#4B9B9B',
        'brand-trust-dark': '#2B7A7A',
        'brand-trust-light': '#C8E8E8',
        'brand-warmth': '#DF7B5E',
        'brand-warmth-light': '#F0B9A8',
        'aurora-teal': '#73D2D2',
        'aurora-mint': '#A7F3D0',
        'aurora-coral': '#F7A38B',
        'aurora-peach': '#FFD5C2',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        aurora: 'aurora 20s linear infinite',
        particles: 'particles 30s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        particles: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-1000px) rotate(720deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;