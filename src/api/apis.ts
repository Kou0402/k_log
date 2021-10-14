import { Article } from 'domain/articles/article'
import { client } from './client'

type FindAllArticleResponse = {
  contents: Pick<Article, 'id' | 'title' | 'createdAt'>[]
}
export const findAllArticle = async () => {
  const data = await client.get<FindAllArticleResponse>({
    endpoint: 'articles',
    queries: { fields: 'id,title,createdAt' },
  })
  return data.contents
}

type FindArticleResponse = Pick<Article, 'title' | 'createdAt' | 'content'>
export const findArticle = async (id: Article['id']) => {
  const data = await client.get<FindArticleResponse>({
    endpoint: 'articles',
    contentId: id,
  })
  return data
}
