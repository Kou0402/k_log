import { Article } from 'domain/articles/types'
import { client } from 'api/client'

export type FindAllArticleResponse = {
  contents: {
    id: Article['id']
    title: Article['title']
    createdAt: string
  }[]
}
export const findAllArticle = async () => {
  const data = await client.get<FindAllArticleResponse>({
    endpoint: 'articles',
    queries: { fields: 'id,title,createdAt' },
  })
  return data.contents
}

export type FindArticleResponse = {
  title: Article['title']
  createdAt: string
  content: Article['content']
  tags: {
    name: string
  }[]
}
export const findArticle = async (id: Article['id']) => {
  const data = await client.get<FindArticleResponse>({
    endpoint: 'articles',
    contentId: id,
  })
  return data
}
