import { Box, Heading, Text, theme } from '@chakra-ui/react'
import React from 'react'
import { Article } from './article'
import { css } from '@emotion/react'
import { format } from 'date-fns'

export type ArticleMainProps = Pick<Article, 'title' | 'createdAt' | 'content'>
export const ArticleMain: React.FC<ArticleMainProps> = ({ title, createdAt, content }) => {
  return (
    <Box as="article">
      <Heading as="h2" fontSize="24px">
        {title}
      </Heading>
      <Text color="gray.400">{format(createdAt, 'yyyy-MM-dd')}</Text>
      <Box css={contentStyle} mt={8} mb={8} dangerouslySetInnerHTML={{ __html: content }}></Box>
    </Box>
  )
}

const contentStyle = css`
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 40px 0 16px;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 12px;
  }
  a {
    color: ${theme.colors.blue[400]};
    :hover {
      text-decoration: underline;
    }
  }
`
