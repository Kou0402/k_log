import { Article, ArticleListItem, ArticleMain } from 'domain/articles/types'
import { client } from 'api/client'

export type FindAllArticleResponse = {
  contents: ArticleListItem[]
}
export const findAllArticle = async () => {
  const data = await client.get<FindAllArticleResponse>({
    endpoint: 'articles',
    queries: { fields: 'id,title,createdAt' },
  })
  return data.contents
}

export type FindArticleResponse = ArticleMain
export const findArticle = async (id: Article['id']) => {
  const data = await client.get<FindArticleResponse>({
    endpoint: 'articles',
    contentId: id,
  })
  return data
}
