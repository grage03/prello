import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components'
import { Layout, Header } from '../core'
import { LoginPage, RegistrationPage, Review } from './modules'
import { PublicPage } from './layouts'
import '../assets/styles/_helpers.sass'
import './style/styles.sass'

const contextStore = {}

export const PublicContext = createContext(contextStore)

const PublicRoute = () => {
  return (
    <Layout contextStore={contextStore} contextProvider={PublicContext}>
      <main className="public h-container">
        <Header />
        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="review" element={<Review />} />
        </Routes>
        <Footer />
      </main>
    </Layout>
  )
}

export default PublicRoute
