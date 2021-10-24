import { findAllArticle, findArticle } from 'api/api'
import { selector, selectorFamily } from 'recoil'
import { Article, ArticleListItem, ArticleMain } from 'domain/articles/types'

export const articlesState = selector<ArticleListItem[]>({
  key: 'articlesState',
  get: async () => {
    const response = await findAllArticle()
    return response.map((item) => {
      return {
        ...item,
        createdAt: new Date(item.createdAt),
        tags: item.tags.map((tag) => tag.name),
      }
    })
  },
})

export const articleState = selectorFamily<ArticleMain, Article['id']>({
  key: 'articleState',
  get: (articleId) => async () => {
    const response = await findArticle(articleId)
    return {
      ...response,
      createdAt: new Date(response.createdAt),
      tags: response.tags.map((tag) => tag.name),
    }
  },
})
