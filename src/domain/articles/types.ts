export type Article = {
  id: string
  title: string
  createdAt: Date
  content: string
  tags: string[] | null
}

export type ArticleMain = Pick<Article, 'title' | 'createdAt' | 'content'>
export type ArticleListItem = Pick<Article, 'id' | 'title' | 'createdAt'>
