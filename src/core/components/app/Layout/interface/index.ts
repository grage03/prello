import { ReactNode, Context } from 'react'

export interface ILayoutProps {
  children: ReactNode
  contextProvider: Context<any>
  contextStore: ContextStore
}

type ContextStore = {
  [key: string]: object
}
