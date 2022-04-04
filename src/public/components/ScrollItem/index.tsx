import React from 'react'

import styles from './style/styles.module.sass'
import { useScroll } from '../../../core/hooks/useScroll/useScroll'

// TODO: add check device, on device !== pc return null
export const ScrollItem = () => {
  const { y } = useScroll()

  const moveToTop = () => {
    window.scrollBy({
      top: -Math.max(document.body.scrollTop, document.documentElement.scrollTop),
      behavior: 'smooth',
    })
  }

  if (y < 300) return null
  return (
    <div className={styles['scroll-item']} onClick={moveToTop}>
      <div className={styles['scroll-item__arrow']}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
