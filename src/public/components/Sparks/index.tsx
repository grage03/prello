import React from 'react'
import { ISparksProps, Sizes } from './interface'

import styles from './style/styles.module.sass'

const positionInit = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

export const Sparks = ({
  quantity = 3, position = positionInit, size = Sizes.STANDARD, rotate = 0, children,
}: ISparksProps) => {
  const initStyles = () => {
    return {
      transform: `scale(${size}) rotate(${rotate}deg)`,
      top: `${position.top}px`,
      right: `${position.right}px`,
      bottom: `${position.bottom}px`,
      left: `${position.left}px`,
    }
  }

  return (
    <div className="sparks">
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
