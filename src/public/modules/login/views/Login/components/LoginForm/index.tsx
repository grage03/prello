import React from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginForm } from './interface'
import { UiButton, UiFormGroup, UiInput } from '../../../../../../../core/components/ui-components'

import './style/styles.sass'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginForm>()
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    return console.log(data)
  }

  const loginUser = () => {
    alert('ok')
  }

  console.log(register)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <UiFormGroup label={t('translation:input-email')}>
        <UiInput placeholder={t('translation:email-placeholder')} type="email" key="content" />
      </UiFormGroup>

      <UiFormGroup label={t('translation:input-password')}>
        <UiInput placeholder={t('translation:password-placeholder')} type="password" key="content" />
      </UiFormGroup>

      <UiButton description={t('translation:public-login')} onClick={loginUser} width="100%" />
    </form>
  )
}
