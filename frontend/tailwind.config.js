// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primaryGreen: '#2ecc71',
        secondaryGreen: '#27ae60',
        accentYellow: '#f1c40f',
        lightYellow: '#f9e79f',
        grayText: '#7f8c8d',
      },
    },
  },
  plugins: [],
};
