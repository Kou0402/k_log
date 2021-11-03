import React, { Suspense } from 'react'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

import 'styles/style.css'
import { theme } from 'styles/thema'
import { Header } from './Header'

const isServer = () => typeof window === 'undefined'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    !isServer() && (
      <RecoilRoot>
        <Suspense fallback={<></>}>
          <ChakraProvider theme={theme}>
            <Header />
            <Box as="main" p="2">
              <Component {...pageProps} />
            </Box>
          </ChakraProvider>
        </Suspense>
      </RecoilRoot>
    )
  )
}
export default MyApp
