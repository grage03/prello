import { ReactNode } from 'react'

// TODO: edit to ButtonType
export enum StyleType {
  STANDARD = 'standard',
  EMPTY = 'empty',
  TRANSPARENT = 'transparent',
}

type ButtonType = 'button' | 'submit'
type OnClickType = () => void

export interface IButtonProps {
  placeholder: string | ReactNode
  width?: string
  type?: ButtonType
  onClick?: OnClickType
  style?: StyleType
}
