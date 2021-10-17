import { FindAllArticleResponse } from 'api/api'

export const getArticlesMock = (): FindAllArticleResponse => {
  return {
    contents: [
      {
        id: 'n--xjw8vp_1',
        createdAt: new Date('2021-10-14'),
        title: 'ブログを作りました',
      },
      {
        id: 'n--xjw8vp_2',
        createdAt: new Date('2021-10-14'),
        title: 'テスト',
      },
    ],
  }
}
