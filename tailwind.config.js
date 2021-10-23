module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Circular"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          light: '#99F6E4',
          DEFAULT: '#2DD4BF',
          dark: '#14B8A6',
        },
        gray: {
          dark: '#36454F',
          DEFAULT: '#788994',
          light: '#C0CAD1',
          lightest: '#F1F4F5',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
