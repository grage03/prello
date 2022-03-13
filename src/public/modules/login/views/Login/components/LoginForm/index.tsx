import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginForm } from './interface'
import { UiButton, UiFormGroup, UiInput } from '../../../../../../../core/components/ui-components'

import './style/styles.sass'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginForm>()
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    return console.log(data)
  }

  const loginUser = () => {
    alert('ok')
  }

  console.log(register)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <UiFormGroup label="Enter email address">
        <UiInput placeholder="Email" type="email" key="content" />
      </UiFormGroup>

      <UiFormGroup label="Enter password">
        <UiInput placeholder="Password" type="password" key="content" />
      </UiFormGroup>

      <UiButton description="Login" onClick={loginUser} width="100%" />
    </form>
  )
}
