import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import './style/styles.sass'

const PublicRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PublicRoute
