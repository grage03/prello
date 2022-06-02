import React from 'react'
import { IAnchorProps } from './interface'

import './style/styles.sass'

export const Anchor = ({ children, anchor }: IAnchorProps) => {
  return (
    <a href={`#${anchor}`} className="anchor">
      {children}
    </a>
  )
}
