export type Article = {
  id: string
  title: string
  createdAt: Date
  content: string
  tags: string[]
}

export type ArticleMain = Pick<Article, 'title' | 'createdAt' | 'content' | 'tags'>
export type ArticleListItem = Pick<Article, 'id' | 'title' | 'createdAt'>
