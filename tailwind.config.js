/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Arial: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 1px 0 rgba(9, 30, 66, 0.25)',
      },
    },
  },

  plugins: [],
};
