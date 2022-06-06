import React, { useMemo } from 'react'
import { ILayoutProps } from './interface'

export const Layout = ({ children, contextStore, contextProvider: ContextProvider }: ILayoutProps) => {
  const store = useMemo(() => (contextStore), [])
  return (
    <ContextProvider.Provider value={store}>
      {children}
    </ContextProvider.Provider>
  )
}
