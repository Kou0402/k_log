import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Home from './index.page'
import { RecoilRoot } from 'recoil'

describe('ホームページ', () => {
  it('ブログ一覧が表示される', async () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    )

    await waitFor(() => {
      expect(screen.getByText('ブログを作りました')).toBeInTheDocument()
      expect(screen.getByText('テスト')).toBeInTheDocument()
    })
  })
})
