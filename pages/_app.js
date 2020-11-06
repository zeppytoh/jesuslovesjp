import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/core'
// 1. Import the extendTheme util - it will merge with the default theme.

// 2. Extend the theme to include custom colors, fonts, etc.
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  
}

export default MyApp
