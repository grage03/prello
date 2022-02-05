import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NotFound, Header } from './core/components'

import './core/style/reset.sass'
import './core/style/global.sass'

import { User, UserContext } from './domain/user/store'

const PublicPage = React.lazy(() => import('./public'))
const AdminPage = React.lazy(() => import('./admin'))
const BoardPage = React.lazy(() => import('./board'))

function App() {
  return (
    <div className='container'>
      <UserContext.Provider value={{
        user: new User()
      }}>
        <Header/>
        <BrowserRouter>
          <Routes>
            {/* TODO переписать Suspense в HOC, или придумать другое решения для анти репита кода */}

            <Route path="/" element={
              <Suspense fallback={<div>Loading...</div>}>
                <PublicPage />
              </Suspense>
            }/>

            <Route path="admin" element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminPage/>
              </Suspense>
            }/>

            <Route path="board" element={
              <Suspense fallback={<div>Loading...</div>}>
                <BoardPage/>
              </Suspense>
            }/>

            <Route path="*" element={<NotFound/>}/>

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
