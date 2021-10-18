import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { Paper } from 'components/Paper'
import { Article } from './article'
import Link from 'next/link'
import { format } from 'date-fns'

export type ArticleCardProps = Pick<Article, 'id' | 'title' | 'createdAt'>
export const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, createdAt }) => {
  return (
    <Link href={`/articles/${id}`}>
      <a>
        <Paper>
          <Box>
            <Text fontSize="sm">{format(createdAt, 'yyyy-MM-dd')}</Text>
            <Text fontSize="lg">{title}</Text>
          </Box>
        </Paper>
      </a>
    </Link>
  )
}
