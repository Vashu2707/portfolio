module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#819A91',
        secondary: '#A7C1A8',
        accent: '#D1D8BE',
        background: '#EEEFE0',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        stackToGrid: {
          '0%': { opacity: 1, transform: 'translateY(0) scale(1)', zIndex: 10 },
          '80%': { opacity: 1, transform: 'translateY(0) scale(1)', zIndex: 10 },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)', zIndex: 1 },
        },
        unstack: {
          '0%': { transform: 'translateY(0) scale(1)', zIndex: 10 },
          '100%': { transform: 'translateY(var(--unstack-y, 0)) scale(1)', zIndex: 1 },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both',
        'fade-in': 'fadeIn 1s ease-in both',
        'stack-to-grid': 'stackToGrid 1s cubic-bezier(0.23, 1, 0.32, 1) 1s both',
      },
    },
  },
  plugins: [],
};
