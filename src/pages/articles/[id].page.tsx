import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { articleState } from 'domain/article/states'
import { ArticleMain } from 'domain/article/components/ArticleMain'

const Articles: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const articleId = typeof id === 'string' ? id : ''
  const article = useRecoilValue(articleState(articleId))

  return (
    <ArticleMain
      title={article.title}
      createdAt={article.createdAt}
      content={article.content}
      tags={article.tags}
    />
  )
}

export default Articles
