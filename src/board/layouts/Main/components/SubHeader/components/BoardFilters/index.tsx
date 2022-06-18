import React from 'react'
import { Icon } from '../../../../../../../core'

import styles from './style/styles.module.sass'
import { filters } from './consts'

export const BoardFilters = () => {
  return (
    <section className={styles['board-filter']}>
      {
        filters.map((item, index) => (
          <div className={styles['board-filter__item']} key={index}>
            <Icon icon={<item.icon />} viewBox="0 0 22 24" size={item.size} />
            {item.placeholder}
          </div>
        ))
      }
    </section>
  )
}
