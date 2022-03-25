import { ReactElement, RefObject } from 'react'

export interface AnimationElementProps {
  children: ReactElement
  animationRef: RefObject<HTMLElement>
  direction: 'left' | 'right'
}
