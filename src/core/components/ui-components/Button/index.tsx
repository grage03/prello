import React from 'react'
import classNames from 'classnames'

import { ButtonProps } from './interface'

import './style/styles.sass'

export const UiButton = ({
  description,
  transparent,
  onClick,
  width,
  type = 'button',
}: ButtonProps) => {
  const classes = classNames({
    button: true,
    'button--transparent': transparent,
    'button--standard': !transparent,
  })

  function onInteracting() {
    onClick()
  }

  return (
    <button type={type} className={classes} onClick={onInteracting} style={{ width: width || 'auto' }}>
      {description}
    </button>
  )
}
