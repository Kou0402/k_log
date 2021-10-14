import { findAllArticle, findArticle } from 'api/apis'
import { atom, selector } from 'recoil'
import { Article } from './article'

export const articlesState = selector({
  key: 'articlesState',
  get: async () => {
    return await findAllArticle()
  },
})

export const articleIdState = atom<Article['id']>({
  key: 'articleIdState',
  default: '',
})

export const articleState = selector({
  key: 'articleState',
  get: async ({ get }) => {
    return await findArticle(get(articleIdState))
  },
})
