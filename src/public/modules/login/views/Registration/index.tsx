import React from 'react'
import { AuthWrapper } from '../../components/AuthWrapper'
import { RegistrationForm } from './components/RegistrationForm'

export const RegistrationPage = () => {
  return (
    <AuthWrapper>
      <RegistrationForm />
    </AuthWrapper>
  )
}
