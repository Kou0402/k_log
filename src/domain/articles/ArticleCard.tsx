import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { Paper } from 'components/Paper'
import { Article } from './article'
import Link from 'next/link'

export type ArticleCardProps = Pick<Article, 'id' | 'title' | 'createdAt'>
export const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, createdAt }) => {
  return (
    <Link href={`/articles/${id}`}>
      <a>
        <Paper>
          <Box>
            {/* TODO: 日付表示 */}
            <Text fontSize="sm">{createdAt.getDate()}</Text>
            <Text fontSize="lg">{title}</Text>
          </Box>
        </Paper>
      </a>
    </Link>
  )
}
