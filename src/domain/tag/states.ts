import { selector } from 'recoil'
import { findAllArticleTag } from 'api/api'

export const tagsState = selector<string[]>({
  key: 'tagsState',
  get: async () => {
    const response = await findAllArticleTag()
    return response.map((item) => {
      return item.name
    })
  },
})
