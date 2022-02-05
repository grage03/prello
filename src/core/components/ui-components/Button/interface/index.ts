export interface ButtonProps {
  description: string

  isTransparent?: boolean
  isBold?: boolean,

  onClick(): void
}