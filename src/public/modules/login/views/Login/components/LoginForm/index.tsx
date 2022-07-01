import React from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginForm } from './interface'
import {
  Button,
  FormGroup,
  Input,
  Namespace,
} from '../../../../../../../core'

import styles from './style/styles.module.sass'
import { schema } from './schema'
import { useLogin } from '../../hooks'

export const LoginForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  })
  const { t } = useTranslation<Namespace[]>(['public__auth'])
  const { onLogin } = useLogin()

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await onLogin(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
      <FormGroup label={t('public__auth:input-email')} error={errors.email}>
        <Input
          placeholder={t('public__auth:email-placeholder')}
          type="email"
          label="email"
          register={register}
        />
      </FormGroup>

      <FormGroup label={t('public__auth:input-password')} error={errors.password}>
        <Input
          placeholder={t('public__auth:password-placeholder')}
          type="password"
          label="password"
          register={register}
        />
      </FormGroup>

      <Button description={t('public__auth:login')} type="submit" />
    </form>
  )
}
