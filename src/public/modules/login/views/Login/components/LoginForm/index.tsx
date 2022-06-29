import React from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginForm } from './interface'
import { Button, FormGroup, Input } from '../../../../../../../core'

import styles from './style/styles.module.sass'
import { schema } from './schema'
import { useLogin } from '../../hooks'

export const LoginForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  })
  const { t } = useTranslation()
  const { onLogin } = useLogin()

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await onLogin(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
      <FormGroup label={t('translation:input-email')} error={errors.email}>
        <Input
          placeholder={t('translation:email-placeholder')}
          type="email"
          label="email"
          register={register}
        />
      </FormGroup>

      <FormGroup label={t('translation:input-password')} error={errors.password}>
        <Input
          placeholder={t('translation:password-placeholder')}
          type="password"
          label="password"
          register={register}
        />
      </FormGroup>

      <Button description={t('translation:public-login')} type="submit" />
    </form>
  )
}
