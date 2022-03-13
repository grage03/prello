import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import './style/styles.sass'

import { UiLinkProps } from './interface'

// TODO rewrite children to React.Element
export const UiLink = ({
  to, isArrow, isUnderline, children,
}: UiLinkProps) => {
  const classes = classNames({
    link: true,
    'link--underline': isUnderline,
    'link--arrow': isArrow,
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
