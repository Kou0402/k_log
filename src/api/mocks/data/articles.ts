import { FindAllArticleResponse } from 'api/api'

export const getArticlesMock = (): FindAllArticleResponse => {
  return {
    contents: [
      {
        id: 'n--xjw8vp_1',
        createdAt: '2021-10-14',
        title: 'ブログを作りました',
        tags: [{ name: '日常' }],
      },
      {
        id: 'n--xjw8vp_2',
        createdAt: '2021-10-14',
        title: 'テスト',
        tags: [{ name: 'React' }],
      },
    ],
  }
}
