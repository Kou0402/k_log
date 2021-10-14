import React from 'react'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

import '../styles/globals.css'
import { Header } from './Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Header />
        <Box as="main" p="2">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </RecoilRoot>
  )
}
export default MyApp
