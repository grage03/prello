import React, { createContext } from 'react'
import { Layout, Header } from '../core'
import { BoardPage } from './layouts'
import './style/styles.sass'

const contextStore = {}

export const BoardContext = createContext(contextStore)

const Board = () => {
  return (
    <Layout contextStore={contextStore} contextProvider={BoardContext}>
      <main className="board">
        <Header />
        <BoardPage />
      </main>
    </Layout>
  )
}

export default Board
