import React from 'react'
import { BoardList } from './components/BoardList'
import { SubHeader } from './components/SubHeader'
import styles from './style/styles.module.sass'
import { BoardItems } from './components/BoardItems'

export const BoardPage = () => {
  return (
    <div className={styles['board-wrapper']}>
      <BoardList />
      <div className={styles['board-wrapper__main']}>
        <SubHeader />
        <BoardItems />
      </div>
    </div>
  )
}
