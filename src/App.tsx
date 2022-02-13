import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './core/modules/locale/config'

import { NotFound, Header } from './core/components'

import './core/style/reset.sass'
import './core/style/global.sass'

const PublicPage = React.lazy(() => import('./public'))
const AdminPage = React.lazy(() => import('./admin'))
const BoardPage = React.lazy(() => import('./board'))

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                <PublicPage />
              </Suspense>
            )}
          />

          <Route
            path="admin"
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                <AdminPage />
              </Suspense>
            )}
          />

          <Route
            path="board"
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                <BoardPage />
              </Suspense>
            )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
