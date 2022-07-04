export enum StyleType {
  EMPTY = 'empty',
  STANDARD = 'standard',
  TRANSPARENT = 'transparent',
}

type ButtonType = 'button' | 'submit'
type OnClickType = () => void

export interface IButtonProps {
  description: string
  style?: StyleType
  type?: ButtonType
  width?: string
  onClick?: OnClickType
}
