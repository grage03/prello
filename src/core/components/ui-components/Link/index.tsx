import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import styles from './style/styles.module.sass'

import { IUiLinkProps } from './interface'

export const UiLink = ({
  to, isArrow, isUnderline, children,
}: IUiLinkProps) => {
  const classes = classNames({
    [styles['link']]: true,
    [styles['link--underline']]: isUnderline,
    [styles['link--arrow']]: isArrow,
  })

  const navigate = useNavigate()

  const onUserClickLink = () => {
    if (!to) throw new Error('no')

    navigate(`/${to}`)
  }

  return (
    <h3 className={classes} onClick={onUserClickLink}>
      {children}
    </h3>
  )
}
