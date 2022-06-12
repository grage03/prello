import React from 'react'
import { ISparksProps } from './interface'

import styles from './style/styles.module.sass'

const sizes = {
  small: 0.4,
  standard: 0.6,
  big: 0.8,
}

const positionInit = {
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
}

export const Sparks = ({
  quantity = 3, position = positionInit, size = 'standard', rotate = 0, children,
}: ISparksProps) => {
  const initStyles = () => {
    return {
      transform: `scale(${sizes[size]}) rotate(${rotate}deg)`,
      top: position.top,
      right: position.right,
      bottom: position.bottom,
      left: position.left,
    }
  }

  return (
    // TODO: add name
    <div>
      <div className={styles['sparks-children']}>
        {children}
      </div>
      <div className={styles['sparks-element']} style={initStyles()}>
        <div className={styles['sparks__item']} />
        {quantity > 1 && <div className={styles['sparks__item']} />}
        {quantity > 2 && <div className={styles['sparks__item']} />}
      </div>
    </div>
  )
}
