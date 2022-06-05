import React from 'react'
import styles from './style/styles.module.sass'
import { BoardName } from './components/BoardName'
import { BoardFilters } from './components/BoardFilters'
import { BoardMenu } from './components/BoardMenu'

export const SubHeader = () => {
  return (
    <div className={styles['board-subheader']}>
      <BoardName />
      <BoardFilters />
      <BoardMenu />
    </div>
  )
}
