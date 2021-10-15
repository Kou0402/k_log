import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { articleIdState, articleState } from 'domain/articles/states'
import { ArticleMain } from 'domain/articles/ArticleMain'

const Articles: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const setArticleId = useSetRecoilState(articleIdState)
  setArticleId(id as string)
  const article = useRecoilValueLoadable(articleState)

  switch (article.state) {
    case 'hasValue':
      return (
        <ArticleMain
          title={article.contents.title}
          createdAt={article.contents.createdAt}
          content={article.contents.content}
        />
      )
    case 'loading':
      return null
    case 'hasError':
      throw article.contents
  }
}

export default Articles
