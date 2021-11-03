import { Article } from 'domain/article/types'
import { client } from 'api/client'

export type FindAllArticleResponse = {
  contents: {
    id: Article['id']
    title: Article['title']
    createdAt: string
    tags: {
      name: string
    }[]
  }[]
}
export const findAllArticle = async () => {
  const data = await client.get<FindAllArticleResponse>({
    endpoint: 'articles',
    queries: { fields: 'id,title,createdAt,tags' },
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

export type FindAllArticleTagResponse = {
  contents: {
    name: string
  }[]
}
export const findAllArticleTag = async () => {
  const data = await client.get<FindAllArticleTagResponse>({
    endpoint: 'tags',
    queries: { fields: 'name' },
  })
  return data.contents
}
