import React, { createContext } from 'react'
import { Layout } from '../core/components/app/Layout'
import { Header } from '../core/components/common'
import { BoardPage } from './layouts/Main'

const contextStore = {}

export const BoardContext = createContext(contextStore)

const Board = () => {
  return (
    <Layout contextStore={contextStore} contextProvider={BoardContext}>
      <main className="board">
        <Header shadow={false} />
        <BoardPage />
      </main>
    </Layout>
  )
}

export default Board
