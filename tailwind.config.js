/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
      padding: '15px'
    },
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
