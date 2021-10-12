import { NextPage } from 'next'
import { Box, Heading, Text } from '@chakra-ui/layout'

const Articles: NextPage = () => {
  return (
    <Box as="article">
      <Heading as="h2">タイトル</Heading>
      <Text>2021-11-11</Text>
      <Text>内容内容内容内容内容内容内容内容内容内容内容内容内容</Text>
    </Box>
  )
}

export default Articles
