module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Sans"', 'ui-sans-serif', 'system-ui'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular']
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
