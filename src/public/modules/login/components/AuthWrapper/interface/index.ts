import { ReactElement } from 'react'

export interface IAuthWrapperProps {
  children: ReactElement
}

export type pageInformationType = {
  page: PageListType
  description: string
  value: string
}

type PageListType = 'login' | 'registration'
