import { findAllArticle, findArticle } from 'api/api'
import { selector, selectorFamily } from 'recoil'
import { Article, ArticleMain } from 'domain/articles/types'

export const articlesState = selector({
  key: 'articlesState',
  get: async () => {
    return await findAllArticle()
  },
})

export const articleState = selectorFamily<ArticleMain, Article['id']>({
  key: 'articleState',
  get: (articleId) => async () => {
    const response = await findArticle(articleId)
    return {
      ...response,
      createdAt: new Date(response.createdAt),
    }
  },
})
