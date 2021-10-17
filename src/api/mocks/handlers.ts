import { rest } from 'msw'
import { getArticlesMock } from './data/articles'

export const handlers = [
  rest.get('https://koub.microcms.io/api/v1/articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getArticlesMock()))
  }),
]
