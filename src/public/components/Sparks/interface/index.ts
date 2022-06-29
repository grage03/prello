import { ReactElement } from 'react'

export enum Sizes {
  SMALL = 0.4,
  STANDARD = 0.6,
  BIG = 0.8,
}

interface Position {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

// TODO: add animation: boolean
export interface ISparksProps {
  quantity?: 1 | 2 | 3
  position?: Position
  rotate?: number
  size?: Sizes
  children: ReactElement
}
