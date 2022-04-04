import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import './style/styles.sass'

const PublicRoute = () => {
  return (
    // TODO: add layout here
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default PublicRoute
