import { ReactElement } from 'react'

export interface IIconProps {
  className?: string | undefined
  fill?: string
  icon: ReactElement
  onClick?: () => void
  size?: number
  viewBox?: string
}
