import React, { createContext, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Loader, NotFound } from './core'

import './assets/styles/main.sass'
import { User } from './domain'

const PublicRoute = React.lazy(() => import('./public'))
const AdminRoute = React.lazy(() => import('./admin'))
const BoardRoute = React.lazy(() => import('./board'))
const ProfileRoute = React.lazy(() => import('./profile'))

// TODO: to clarify whether it is possible to throw the context from App.ts
const contextStore = {
  userStore: new User(),
}

export const AppContext = createContext(contextStore)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AppContext.Provider value={contextStore}>
          <Routes>
            <Route path="/*" element={<PublicRoute />} />
            <Route path="admin" element={<AdminRoute />} />
            <Route path="board" element={<BoardRoute />} />
            <Route path="profile" element={<ProfileRoute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContext.Provider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
