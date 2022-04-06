import React from 'react'
import { SparksProps } from './interface'

import styles from './style/styles.module.sass'

const sizes = {
  small: 0.4,
  standard: 0.6,
  big: 0.8,
}

export const Sparks = ({
  quantity = 3, position, size = 'standard', rotate = 0, children,
}: SparksProps) => {
  const initStyles = () => {
    return {
      transform: `scale(${sizes[size]}) rotate(${rotate}deg)`,
      top: 0 || position?.top,
      right: 0 || position?.right,
      bottom: 0 || position?.bottom,
      left: 0 || position?.left,
    }
  }

  return (
    // TODO: add name
    <div style={{ position: 'relative' }}>
      {children}
      <div className={styles['sparks']} style={initStyles()}>
        <div className={styles['sparks__item']} />
        {quantity > 1 && <div className={styles['sparks__item']} />}
        {quantity > 2 && <div className={styles['sparks__item']} />}
      </div>
    </div>
  )
}
