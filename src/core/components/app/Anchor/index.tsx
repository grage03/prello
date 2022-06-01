import React from 'react'
import { AnchorProps } from './interface'

import './style/styles.sass'

export const Anchor = ({ children, anchor }: AnchorProps) => {
  return (
    <a href={`#${anchor}`} className="anchor">
      {children}
    </a>
  )
}
