import { ReactElement, ReactNode } from 'react'

export interface IWrapper {
  header: IHeader
  children: ReactNode
}

export interface IHeader {
  text: string
  icon?: ReactElement
}
