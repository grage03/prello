import { ReactNode } from 'react'
import { User } from '../../../../../domain/user/store'

export interface LayoutProps {
  children: ReactNode
  contextStore: {
    userStore: User
  }
}
