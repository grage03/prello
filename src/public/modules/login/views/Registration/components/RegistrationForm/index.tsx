import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegistrationForm } from './interface'
import {
  UiButton,
  UiFormGroup,
  UiInput,
  UiCheckBox,
} from '../../../../../../../core/components/ui-components'

import './style/styles.sass'

export const RegistrationForm = () => {
  const { register, handleSubmit } = useForm<IRegistrationForm>()
  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    return console.log(data)
  }

  const loginUser = () => {
    alert('ok')
  }

  console.log(register)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <UiFormGroup label="Enter email address">
        <UiInput placeholder="Email" type="email" key="content" />
      </UiFormGroup>

      <UiFormGroup label="Create password">
        <UiInput placeholder="Password" type="password" key="content" />
      </UiFormGroup>

      <UiCheckBox label="I agree to terms & conditions" />

      <div className="registration-form__submit">
        <UiButton description="Registration" onClick={loginUser} width="100%" transparent />
      </div>
    </form>
  )
}
