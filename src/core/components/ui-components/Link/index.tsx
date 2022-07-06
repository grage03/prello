import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { ILinkProps } from './interface'

import styles from './style/styles.module.sass'

// TODO: add style
export const Link = ({
  to, isArrow, isUnderline, children,
}: ILinkProps) => {
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
