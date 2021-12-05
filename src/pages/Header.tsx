import React from 'react'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/layout'
import { TagSearch } from 'domain/tag/components/TagSearch'
import { Flex, Spacer } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box as="header" p="2">
      <Flex>
        <Heading fontFamily="'PT Mono', monospace;">
          <Link href="/">
            <a>P_LOG</a>
          </Link>
        </Heading>
        <Spacer />
        <TagSearch />
      </Flex>
    </Box>
  )
}
