import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from './core/components/NotFound'

import './core/style/reset.sass'

const PublicPage = React.lazy(() => import('./public'))

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<div>Loading...</div>}>
          <PublicPage>
            <React.Fragment key='header'>
              <h4>test!!!</h4>
            </React.Fragment>
            <h1>test</h1>
          </PublicPage>
        </Suspense>
      }/>

      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App
