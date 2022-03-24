import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './core/plugins/locale/config'

import { Loader, NotFound } from './core/components/common'

import './assets/styles/main.sass'

import { PublicPage } from './public/layouts/Main'
import { LoginPage, RegistrationPage } from './public/modules/login/views'

const PublicRoute = React.lazy(() => import('./public'))
const AdminRoute = React.lazy(() => import('./admin'))
const BoardRoute = React.lazy(() => import('./board'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<PublicPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
          <Route path="admin" element={<AdminRoute />} />
          <Route path="board" element={<BoardRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
