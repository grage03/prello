import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../core/components'

const PublicPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default PublicPage
