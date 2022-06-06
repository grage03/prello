import { ReactNode, Context } from 'react'

export interface ILayoutProps {
  children: ReactNode
  contextStore: ContextStore
  contextProvider: Context<any>
}

type ContextStore = {
  [key: string]: object
}
