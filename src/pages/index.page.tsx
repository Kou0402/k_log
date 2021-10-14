import { Box } from '@chakra-ui/layout'
import { ArticleCard } from 'domain/articles/ArticleCard'
import { articlesState } from 'domain/articles/states'
import type { NextPage } from 'next'
import { useRecoilValueLoadable } from 'recoil'

const Home: NextPage = () => {
  const articles = useRecoilValueLoadable(articlesState)

  switch (articles.state) {
    case 'hasValue':
      return (
        <Box>
          {articles.contents.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              createdAt={new Date(article.createdAt)}
            />
          ))}
        </Box>
      )
    case 'loading':
      return null
    case 'hasError':
      throw articles.contents
  }
}

export default Home
