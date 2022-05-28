import React, { createContext, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Layout } from '../core/components/app/Layout'
import { LoginPage, RegistrationPage } from './modules/login/views'
import { PublicPage } from './layouts/Main'
import { User } from '../domain/user/store'

// TODO: rewrite to custom context.provider
export const Context = createContext({
  userStore: new User(),
})

const PublicRoute = () => {
  const userStore = useMemo(() => ({ userStore: new User() }), [])
  return (
    <Context.Provider value={userStore}>
      <Layout>
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
    </Context.Provider>
  )
}

export default PublicRoute
