import React, { createContext } from 'react'
import { Layout, Header } from '../core'
import { BoardPage } from './layouts'

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
