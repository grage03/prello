import React from 'react'
import styles from './style/styles.module.sass'
import { BoardMenu, BoardName, BoardFilters } from './components'

export const SubHeader = () => {
  return (
    <div className={styles['board-subheader']}>
      <BoardName />
      <BoardFilters />
      <BoardMenu />
    </div>
  )
}
