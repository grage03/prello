import React from 'react'
import classNames from 'classnames'
import { AnimationElementProps } from './interface'

import './style/styles.sass'
import { usePosition } from '../../../hooks/usePosition/usePosition'

export const AnimationElement = ({ children, animationRef, direction }: AnimationElementProps) => {
  const position = usePosition(animationRef)
  const classes = classNames({
    'animation-wrapper': true,
    'animation-wrapper--left-to-start': direction === 'left',
    'animation-wrapper--right-to-start': direction === 'right',
  })

  return (
    <div className={classes} onClick={() => console.log(position)}>
      {children}
    </div>
  )
}
