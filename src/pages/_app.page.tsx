import React from 'react'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import { Header } from './Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Box as="main" p="2">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
export default MyApp
