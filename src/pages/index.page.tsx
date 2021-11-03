import { Box, Text } from '@chakra-ui/layout'
import { ArticleCard } from 'domain/article/components/ArticleCard'
import { articlesState } from 'domain/article/states'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValueLoadable } from 'recoil'

const Home: NextPage = () => {
  const router = useRouter()
  const { tag } = router.query

  const articles = useRecoilValueLoadable(articlesState)

  switch (articles.state) {
    case 'hasValue':
      return (
        <Box>
          {tag && tag.length !== 0 && (
            <Text mb={2} color="gray.400">
              タグ：{tag}
            </Text>
          )}
          {articles.contents.map((article) =>
            tag && tag.length !== 0 ? (
              article.tags.some((articleTag) => articleTag === tag) && (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  createdAt={new Date(article.createdAt)}
                />
              )
            ) : (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                createdAt={new Date(article.createdAt)}
              />
            ),
          )}
        </Box>
      )
    case 'loading':
      return null
    case 'hasError':
      throw articles.contents
  }
}

export default Home
