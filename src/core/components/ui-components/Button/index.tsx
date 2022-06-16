import React from 'react'
import classNames from 'classnames'

import { IButtonProps } from './interface'

import styles from './style/styles.module.sass'

export const Button = ({
  description,
  transparent,
  onClick,
  width,
  type = 'button',
}: IButtonProps) => {
  const classes = classNames({
    [styles['button']]: true,
    [styles['button--transparent']]: transparent,
    [styles['button--standard']]: !transparent,
  })

  return (
    <button type={type} className={classes} onClick={onClick} style={{ width: width || 'auto' }}>
      {description}
    </button>
  )
}
