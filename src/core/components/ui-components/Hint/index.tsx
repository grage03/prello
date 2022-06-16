import React, { useState } from 'react'
import { IHintProps } from './interface'
import { useSlots } from '../../../hooks'
import './style/styles.sass'

export const Hint = ({ children, title, description }: IHintProps) => {
  const slots = useSlots({ children })
  const [ isHovered, setIsHovered ] = useState(false)

  return (
    <div className="hint">
      <div className="hint__trigger" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
        <h1 className="hint__trigger--title">{slots.trigger}</h1>
      </div>
      {isHovered && (
        <div className="hint__content">
          {title && <div className="hint__content--title">{title}</div>}
          <div className="hint__content--description">
            {description}
          </div>
        </div>
      )}
    </div>
  )
}
