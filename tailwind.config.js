module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        "55": "55rem",
      },
      opacity: {
        "80": ".8",
      },
      colors: {
        'accent-1': '#333',
      }
    }
  },
  variants: {},
  plugins: [],
  // ...
}