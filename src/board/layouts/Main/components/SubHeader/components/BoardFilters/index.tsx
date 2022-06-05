import React from 'react'
import { UiIcon } from '../../../../../../../core/components/ui-components'

import styles from './style/styles.module.sass'
import { filters } from './consts'

export const BoardFilters = () => {
  return (
    <section className={styles['board-filter']}>
      {
        filters.map((item, index) => (
          <div className={styles['board-filter__item']} key={index}>
            <UiIcon icon={<item.icon />} viewBox="0 0 22 24" size={item.size} />
            {item.placeholder}
          </div>
        ))
      }
    </section>
  )
}
