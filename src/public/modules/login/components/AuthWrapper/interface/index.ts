import { ReactElement } from 'react'

export interface AuthWrapperProps {
  children: ReactElement
}

export type pageInformationType = {
  page: pageList
  to: linkList
  description: string
}

type pageList = 'login' | 'registration'
type linkList = 'Login' | 'Registration'
