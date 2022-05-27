export interface ButtonProps {
  description: string

  transparent?: boolean
  width?: string
  type?: 'button' | 'submit'

  onClick(): void
}
