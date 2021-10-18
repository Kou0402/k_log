import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/layout'

export const Header = () => {
  return (
    <Box as="header" p="2">
      <Heading fontFamily="'PT Mono', monospace;">
        <Link href="/">
          <a>k_LOG</a>
        </Link>
      </Heading>
    </Box>
  )
}
