export interface ILogoProps {
  size?: LogoSizeType
  logo: string
  to?: string | null
}

type LogoSizeType = 'small' | 'big'
