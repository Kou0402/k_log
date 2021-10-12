import Link from 'next/link'
import { Box, Heading, Text } from '@chakra-ui/layout'

export const Header = () => {
  return (
    <Box as="header" p="2">
      <Heading>
        <Link href="/">
          <a>kou blog</a>
        </Link>
      </Heading>
    </Box>
  )
}
