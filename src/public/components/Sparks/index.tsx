import React from 'react'
import { SparksProps } from './interface'

import styles from './style/styles.module.sass'

const sizes = {
  small: 0.4,
  standard: 0.6,
  big: 0.8,
}

export const Sparks = ({
  quantity, position, size = 'standard', children,
}: SparksProps) => {
  const initStyles = () => {
    return {
      transform: `scale(${sizes[size]})`,
      top: 0 || position?.y,
      left: 0 || position?.x,
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
