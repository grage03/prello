import React from 'react'

import './style/styles.sass'
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
    <div className="scroll-item" onClick={moveToTop}>
      <div className="scroll-item__arrow">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
