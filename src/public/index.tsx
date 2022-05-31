import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Layout } from '../core/components/app/Layout'
import { LoginPage, RegistrationPage } from './modules/login/views'
import { PublicPage } from './layouts/Main'
import { User } from '../domain/user/store'

const contextStore = {
  userStore: new User(),
}

export const Context = createContext(contextStore)

const PublicRoute = () => {
  return (
    <Layout contextStore={contextStore}>
      <>
        <Header />
        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </>
    </Layout>
  )
}

export default PublicRoute
