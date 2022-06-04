import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './core/lib/locale/config'

import { Loader, NotFound } from './core/components/common'

import './assets/styles/main.sass'

const PublicRoute = React.lazy(() => import('./public'))
const AdminRoute = React.lazy(() => import('./admin'))
const BoardRoute = React.lazy(() => import('./board'))
const ProfileRoute = React.lazy(() => import('./profile'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
          <Route path="admin" element={<AdminRoute />} />
          <Route path="board" element={<BoardRoute />} />
          <Route path="profile" element={<ProfileRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
