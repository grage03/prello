import React from 'react'
import { BoardMenu, BoardName, BoardFilters } from './components'

import styles from './style/styles.module.sass'

export const SubHeader = () => {
  return (
    <div className={styles['board-subheader']}>
      <BoardName />
      <BoardFilters />
      <BoardMenu />
    </div>
  )
}
