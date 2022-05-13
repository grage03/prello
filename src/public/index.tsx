import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import { Layout } from '../core/components/app/Layout'

const PublicRoute = () => {
  return (
    <Layout>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Layout>
  )
}

export default PublicRoute
