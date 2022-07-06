import React from 'react'
import { ISparksProps, Sizes } from './interface'

import styles from './style/styles.module.sass'

const positionInit = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}

export const Sparks = ({
  quantity = 3, position = positionInit, size = Sizes.STANDARD, rotate = 0, children,
}: ISparksProps) => {
  const initStyles = () => {
    return {
      bottom: `${position.bottom}px`,
      left: `${position.left}px`,
      right: `${position.right}px`,
      top: `${position.top}px`,
      transform: `scale(${size}) rotate(${rotate}deg)`,
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
