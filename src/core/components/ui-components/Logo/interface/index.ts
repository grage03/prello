export interface IUiLogoProps {
  size?: LogoSize
  logo: string
  to?: string | null
}

type LogoSize = 'small' | 'big'
