import React from 'react'
import { UiIcon } from '../../../../../../../core/components/ui-components'
import { Menu } from '../../../../../../../assets/icon/border/Menu'

import styles from './style/styles.module.sass'

export const BoardMenu = () => {
  return (
    <section className={styles['board-menu']}>
      <UiIcon icon={<Menu />} />
    </section>
  )
}
