import { Box } from '@chakra-ui/layout'
import { ArticleCard } from 'domain/articles/ArticleCard'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box>
      <ArticleCard
        id={1}
        title="記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル"
        createdAt={new Date()}
      />
    </Box>
  )
}

export default Home
