import React from 'react'
import { BoardList, BoardItems, SubHeader } from './components'
import styles from './style/styles.module.sass'

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
