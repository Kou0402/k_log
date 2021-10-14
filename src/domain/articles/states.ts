import { findAllArticle, findArticle } from 'api/apis'
import { atom, selector } from 'recoil'
import { Article } from './article'

export const articlesState = selector({
  key: 'articlesState',
  get: () => {
    return findAllArticle()
  },
})

export const articleIdState = atom<Article['id'] | undefined>({
  key: 'articleIdState',
  default: undefined,
})

export const articleState = selector({
  key: 'articleState',
  get: async ({ get }) => {
    const articleId = get(articleIdState)
    return articleId && (await findArticle(articleId))[0]
  },
})
