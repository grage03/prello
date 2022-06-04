import React from 'react'
import { BoardList } from './components/BoardList'
import { SubHeader } from './components/SubHeader'
import './style/styles.sass'

export const BoardPage = () => {
  return (
    <div className="board-wrapper">
      <BoardList />
      <SubHeader />
    </div>
  )
}
