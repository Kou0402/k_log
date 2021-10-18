import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Article } from './article'
import { css } from '@emotion/react'
import { format } from 'date-fns'

export type ArticleMainProps = Pick<Article, 'title' | 'createdAt' | 'content'>
export const ArticleMain: React.FC<ArticleMainProps> = ({ title, createdAt, content }) => {
  return (
    <Box as="article">
      <Stack>
        <Text>{format(createdAt, 'yyyy-MM-dd')}</Text>
        <Heading as="h2" fontSize="24px">
          {title}
        </Heading>
        <Box css={contentStyle} dangerouslySetInnerHTML={{ __html: content }}></Box>
      </Stack>
    </Box>
  )
}

const contentStyle = css`
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 40px 0 16px;
  }
`
