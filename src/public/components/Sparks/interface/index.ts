import { ReactElement } from 'react'

export enum Sizes {
  BIG = 0.8,
  SMALL = 0.4,
  STANDARD = 0.6,
}

interface Position {
  bottom?: number
  left?: number
  right?: number
  top?: number
}

// TODO: add animation: boolean
export interface ISparksProps {
  children: ReactElement
  position?: Position
  quantity?: 1 | 2 | 3
  rotate?: number
  size?: Sizes
}
