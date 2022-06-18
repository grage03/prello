import React from 'react'
import { Icon } from '../../../../../../../core'
import { Menu } from '../../../../../../../assets/icon'

import styles from './style/styles.module.sass'

export const BoardMenu = () => {
  return (
    <section className={styles['board-menu']}>
      <Icon icon={<Menu />} />
    </section>
  )
}
