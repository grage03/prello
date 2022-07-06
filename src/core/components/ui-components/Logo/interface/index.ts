export enum LogoSize {
  BIG = 'big',
  SMALL = 'small',
  STANDARD = 'standard',
}

export interface ILogoProps {
  logo: string
  size?: LogoSize
  to?: string | null
}
