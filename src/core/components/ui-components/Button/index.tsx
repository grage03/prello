import React from 'react'
import classNames from 'classnames'

import { ButtonProps } from './interface'

import './style/styles.sass'

export const UiButton = ({
  description, isTransparent, isBold, onClick,
}: ButtonProps) => {
  const classes = classNames({
    button: true,
    'button--transparent': isTransparent,
    'button--standard': !isTransparent,
    'button--bold': isBold,
  })

  function onInteracting() {
    onClick()
  }

  return (
    <button type="button" className={classes} onClick={onInteracting}>
      {description}
    </button>
  )
}
