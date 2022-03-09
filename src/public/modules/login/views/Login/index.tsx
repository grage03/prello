import React from 'react'
import { AuthWrapper } from '../../components/AuthWrapper'
import { UiForm } from '../../../../../core/components/ui-components'

export const LoginPage = () => {
  const onUserLogin = () => {
    return true
  }

  return (
    <AuthWrapper>
      <div className="login">
        <UiForm
          formInputs={[ 'Email address', 'Password' ]}
          onSubmit={onUserLogin}
          width="50%"
        />
      </div>
    </AuthWrapper>
  )
}
