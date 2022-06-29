import React from 'react'
import classNames from 'classnames'

import { IButtonProps, StyleType } from './interface'

import styles from './style/styles.module.sass'

export const Button = ({
  description,
  onClick,
  width = '100%',
  type = 'button',
  style = StyleType.STANDARD,
}: IButtonProps) => {
  const classes = classNames({
    [styles['button']]: true,
    [styles[`button--${style}`]]: true,
  })

  return (
    <button type={type} className={classes} onClick={onClick} style={{ width }}>
      {description}
    </button>
  )
}
