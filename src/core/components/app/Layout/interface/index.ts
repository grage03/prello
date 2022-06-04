import { ReactNode, Context } from 'react'

export interface ILayoutProps {
  children: ReactNode
  contextStore: ContextStore
  ContextProvider: Context<any>
}

type ContextStore = {
  [key: string]: object
}
