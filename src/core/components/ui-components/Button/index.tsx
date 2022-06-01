import React from 'react'
import classNames from 'classnames'

import { ButtonProps } from './interface'

import styles from './style/styles.module.sass'

export const UiButton = ({
  description,
  transparent,
  onClick,
  width,
  type = 'button',
}: ButtonProps) => {
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
