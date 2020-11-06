module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      }
    }
  },
  variants: {},
  plugins: [],
  // ...
}