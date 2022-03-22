import { ReactElement } from 'react'

export interface AuthWrapperProps {
  children: ReactElement
}

export type pageInformationType = {
  page: pageList
  to: pageList

  description: string
  value: string
}

type pageList = 'login' | 'registration'
