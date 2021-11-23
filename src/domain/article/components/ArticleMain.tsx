import { Box, HStack, Heading, Text, theme } from '@chakra-ui/react'
import React from 'react'
import { ArticleMain as ArticleMainType } from 'domain/article/types'
import { css } from '@emotion/react'
import { format } from 'date-fns'

export type ArticleMainProps = ArticleMainType
export const ArticleMain: React.FC<ArticleMainProps> = ({ title, createdAt, content, tags }) => (
  <Box as="article">
    <Heading as="h1" fontSize="26px">
      {title}
    </Heading>
    <Text color="gray.400">{format(createdAt, 'yyyy-MM-dd')}</Text>
    <HStack color="gray.400">
      {tags.map((tag) => (
        <Text key={tag}>{tag}</Text>
      ))}
    </HStack>
    <Box css={contentStyle} mt={8} mb={8} dangerouslySetInnerHTML={{ __html: content }}></Box>
  </Box>
)

const contentStyle = css`
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin: 24px 0 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${theme.colors.gray[400]};
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 24px 0 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${theme.colors.gray[400]};
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 24px 0 16px;
  }
  a {
    color: ${theme.colors.blue[400]};
    :hover {
      text-decoration: underline;
    }
  }
  ul {
    list-style: inside;
    padding-left: 16px;
  }
`
