export enum LogoSize {
  SMALL = 'small',
  STANDARD = 'standard',
  BIG = 'big',
}

export interface ILogoProps {
  size?: LogoSize
  logo: string
  to?: string | null
}
