import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Article } from './article'
import { css } from '@emotion/react'

export type ArticleMainProps = Pick<Article, 'title' | 'createdAt' | 'content'>
export const ArticleMain: React.FC<ArticleMainProps> = ({ title, createdAt, content }) => {
  return (
    <Box as="article">
      <Heading as="h2">{title}</Heading>
      <Text>{createdAt}</Text>
      <Box css={contentStyle} dangerouslySetInnerHTML={{ __html: content }}></Box>
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
