import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components'
import { Layout } from '../core/components/app/Layout'
import { LoginPage, RegistrationPage } from './modules/login/views'
import { PublicPage } from './layouts/Main'
import { Header } from '../core/components/common'
import '../assets/styles/_helpers.sass'

const contextStore = {}

export const PublicContext = createContext(contextStore)

const PublicRoute = () => {
  return (
    <Layout contextStore={contextStore} ContextProvider={PublicContext}>
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
