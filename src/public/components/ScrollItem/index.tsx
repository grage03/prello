import React from 'react'

import styles from './style/styles.module.sass'
import { useScroll } from '../../../core/hooks'

export const ScrollItem = () => {
  const { y, isMobile } = useScroll()

  const moveToTop = () => {
    window.scrollBy({
      top: -Math.max(document.body.scrollTop, document.documentElement.scrollTop),
      behavior: 'smooth',
    })
  }

  if (y < 300 || isMobile) return null
  return (
    <div className={styles['scroll-item']} onClick={moveToTop}>
      <div className={styles['scroll-item__arrow']}>
        {Array.from([ ...Array(3) ].keys()).map((item) => (
          <span />
        ))}
      </div>
    </div>
  )
}
