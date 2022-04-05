import React from 'react'

import '../../../../assets/styles/_helpers.sass'
import { LayoutProps } from './interface'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-container">
      {children}
    </main>
  )
}
