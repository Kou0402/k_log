import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import { format } from 'date-fns'
import { Article } from '../types'
import { Paper } from 'utils/components/Paper'

export type ArticleCardProps = {
  id: Article['id']
  title: Article['title']
  createdAt: Article['createdAt']
}
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
