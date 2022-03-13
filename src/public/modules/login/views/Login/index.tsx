import React from 'react'
import { AuthWrapper } from '../../components/AuthWrapper'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  )
}
