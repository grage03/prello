import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './core/plugins/locale/config'

import { NotFound } from './core/components'

import './core/style/reset.sass'
import './core/style/global.sass'
import { PublicPage } from './public/layouts/Main'
// TODO: move to file (index.js) => export
import { LoginPage } from './public/modules/login/views/Login'
import { RegistrationPage } from './public/modules/login/views/Registration'
import { Loader } from './core/components/common/Loader'

const PublicRoute = React.lazy(() => import('./public'))
const AdminRoute = React.lazy(() => import('./admin'))
const BoardRoute = React.lazy(() => import('./board'))

function App() {
  return (
    <div className="container">
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
    </div>
  )
}

export default App
