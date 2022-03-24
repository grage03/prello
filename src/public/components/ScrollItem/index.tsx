import React from 'react'

import './style/styles.sass'

// TODO: add check device, on device !== pc return null
export const ScrollItem = () => {
  const moveToTop = () => {
    window.scrollBy({
      top: -Math.max(document.body.scrollTop, document.documentElement.scrollTop),
      behavior: 'smooth',
    })
  }

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
