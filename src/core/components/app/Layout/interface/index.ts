import { ReactNode } from 'react'
import { User } from '../../../../../domain/user/store'

export interface ILayoutProps {
  children: ReactNode
  contextStore: {
    userStore: User
  }
}
