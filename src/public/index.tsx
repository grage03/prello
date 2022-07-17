import React, { createContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Footer } from './components'
import {
  Layout,
  Header,
  scrollToTop,
} from '../core'
import { LoginPage, RegistrationPage } from './modules'
import { PublicPage } from './layouts'

import '../assets/styles/_helpers.sass'
import './style/styles.sass'

const contextStore = {}

export const PublicContext = createContext(contextStore)

const PublicRoute = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <Layout contextStore={contextStore} contextProvider={PublicContext}>
      <main className="public h-container">
        <Header />
        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </main>
    </Layout>
  )
}

export default PublicRoute
