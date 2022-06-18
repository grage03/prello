import React from 'react'
import classNames from 'classnames'

import { IButtonProps, StyleType } from './interface'

import styles from './style/styles.module.sass'

export const Button = ({
  description,
  onClick,
  width,
  type = 'button',
  style = StyleType.STANDARD,
}: IButtonProps) => {
  const classes = classNames({
    [styles['button']]: true,
    [styles['button--transparent']]: style === StyleType.TRANSPARENT,
    [styles['button--standard']]: style === StyleType.STANDARD,
    [styles['button--empty']]: style === StyleType.EMPTY,
  })

  return (
    <button type={type} className={classes} onClick={onClick} style={{ width: width || 'auto' }}>
      {description}
    </button>
  )
}
