import React from 'react'
import { IAnchorProps } from './interface'

import './style/styles.sass'
import { useMatchMedia } from '../../../hooks'

export const Anchor = ({ children, anchor }: IAnchorProps) => {
  const { isMobile } = useMatchMedia()

  const onClickAnchor = () => {
    const element = document.getElementById(anchor)

    if (isMobile) {
      const elementPosition = element?.getBoundingClientRect()
      const position = elementPosition!.top + window.pageYOffset - 100

      return window.scrollTo(0, position)
    }

    element?.scrollIntoView({ block: 'center' })
  }

  return (
    <a onClick={onClickAnchor} className="anchor">
      {children}
    </a>
  )
}
