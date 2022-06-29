export enum StyleType {
  STANDARD = 'standard',
  EMPTY = 'empty',
  TRANSPARENT = 'transparent',
}

type ButtonType = 'button' | 'submit'
type OnClickType = () => void

export interface IButtonProps {
  description: string
  width?: string
  type?: ButtonType
  onClick?: OnClickType
  style?: StyleType
}
