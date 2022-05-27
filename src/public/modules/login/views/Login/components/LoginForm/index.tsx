import React from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginForm } from './interface'
import { UiButton, UiFormGroup, UiInput } from '../../../../../../../core/components/ui-components'

import styles from './style/styles.module.sass'

export const LoginForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<ILoginForm>()
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data)
  }

  const loginUser = () => {
    return true
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
      <UiFormGroup label={t('translation:input-email')} errors={errors} value="email">
        <UiInput
          placeholder={t('translation:email-placeholder')}
          type="email"
          label="email"
          register={register}
        />
      </UiFormGroup>

      <UiFormGroup label={t('translation:input-password')} errors={errors} value="email">
        <UiInput
          placeholder={t('translation:password-placeholder')}
          type="password"
          label="password"
          register={register}
        />
      </UiFormGroup>

      <UiButton description={t('translation:public-login')} onClick={loginUser} width="100%" type="submit" />
    </form>
  )
}
