import React from 'react'
import { IAnchorProps } from './interface'

import './style/styles.sass'

export const Anchor = ({ children, anchor }: IAnchorProps) => {
  const onClickAnchor = () => {
    const element = document.getElementById(anchor)

    element?.scrollIntoView({ block: 'center' })
  }

  return (
    <a onClick={onClickAnchor} className="anchor">
      {children}
    </a>
  )
}
