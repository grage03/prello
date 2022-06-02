import React, { useMemo } from 'react'

import '../../../../assets/styles/_helpers.sass'
import { ILayoutProps } from './interface'
import { Context } from '../../../../public'

export const Layout = ({ children, contextStore }: ILayoutProps) => {
  const store = useMemo(() => (contextStore), [])

  return (
    <Context.Provider value={store}>
      <main className="h-container">
        {children}
      </main>
    </Context.Provider>
  )
}
