export interface IButtonProps {
  description: string
  transparent?: boolean
  width?: string
  type?: ButtonType
  onClick?: OnClickType
}

type OnClickType = () => void
type ButtonType = 'button' | 'submit'
