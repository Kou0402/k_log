import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValueLoadable } from 'recoil'
import { articleState } from 'domain/articles/states'
import { ArticleMain } from 'domain/articles/ArticleMain'

const Articles: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const articleId = typeof id === 'string' ? id : ''
  const article = useRecoilValueLoadable(articleState(articleId))

  switch (article.state) {
    case 'hasValue':
      return (
        <ArticleMain
          title={article.contents.title}
          createdAt={article.contents.createdAt}
          content={article.contents.content}
          tags={article.contents.tags}
        />
      )
    case 'loading':
      return null
    case 'hasError':
      throw article.contents
  }
}

export default Articles
