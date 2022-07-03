import React from 'react'

import styles from './style/styles.module.sass'
import { ReviewInteraction } from './components'

export const Review = () => {
  return (
    <div className={styles['review']}>
      <ReviewInteraction />
      <div className={styles['review__info']}>
        info
      </div>
    </div>
  )
}
