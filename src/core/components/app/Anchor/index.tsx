import React from 'react'
import { AnchorProps } from './interface'

import './style/styles.sass'

// TODO: the header prevents you from scrolling through the block, need to add padding with the length of the header
export const Anchor = ({ children, anchor }: AnchorProps) => {
  return (
    <a href={`#${anchor}`} className="anchor">
      {children}
    </a>
  )
}
