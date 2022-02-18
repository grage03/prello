import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './core/modules/locale/config'

import { NotFound } from './core/components'

import './core/style/reset.sass'
import './core/style/global.sass'

const PublicRoute = React.lazy(() => import('./public'))
const AdminRoute = React.lazy(() => import('./admin'))
const BoardRoute = React.lazy(() => import('./board'))

const PublicPage = React.lazy(() => import('./public/views/Public'))
const LoginPage = React.lazy(() => import('./public/views/Login'))
const RegistrationPage = React.lazy(() => import('./public/views/Registration'))

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={<div>Loader...</div>}>
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
    </div>
  )
}

export default App
