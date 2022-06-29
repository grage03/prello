export enum StyleType {
  STANDARD = 'standard',
  EMPTY = 'empty',
  TRANSPARENT = 'transparent',
}

type ButtonType = 'button' | 'submit'
type OnClickType = () => void
type ButtonStyleType = StyleType.EMPTY | StyleType.STANDARD | StyleType.TRANSPARENT

export interface IButtonProps {
  description: string
  width?: string
  type?: ButtonType
  onClick?: OnClickType
  style?: ButtonStyleType
}
