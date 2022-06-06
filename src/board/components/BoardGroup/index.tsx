import React from 'react'

import styles from './style/styles.module.sass'

export const BoardGroup = ({ color }: { color: string }) => {
  return <div className={styles['board-group']} style={{ backgroundColor: color }} />
}
