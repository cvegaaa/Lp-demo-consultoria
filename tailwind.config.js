/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f4f6f9',
          100: '#e6ebf2',
          200: '#c9d4e2',
          300: '#9fb2cb',
          400: '#6e88ad',
          500: '#4d6a92',
          600: '#3c5478',
          700: '#324661',
          800: '#1f2f44',
          900: '#0f1e2e',
          950: '#0a1622',
        },
        bronce: {
          50: '#fbf7ee',
          100: '#f5ecd5',
          200: '#ebd7a8',
          300: '#dfbd76',
          400: '#d4a852',
          500: '#c9a961',
          600: '#b08a3f',
          700: '#8c6a32',
          800: '#6b5128',
          900: '#4d3a1d',
        },
        crema: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f3e9d4',
          300: '#ead9b5',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
};
