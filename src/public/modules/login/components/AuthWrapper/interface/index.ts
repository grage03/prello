import { ReactElement } from 'react'

export interface IAuthWrapperProps {
  children: ReactElement
}

export type pageInformationType = {
  description: string
  page: PageListType
  value: string
}

type PageListType = 'login' | 'registration'
