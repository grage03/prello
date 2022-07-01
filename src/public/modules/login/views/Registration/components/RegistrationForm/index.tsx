import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { IRegistrationForm } from './interface'
import {
  Button,
  Checkbox,
  FormGroup,
  Input, Namespace,
} from '../../../../../../../core'

import styles from './style/styles.module.sass'
import { schema } from './schema'
import { useRegistration } from '../../hooks'
import { StyleType } from '../../../../../../../core/components/ui-components/Button/interface'

export const RegistrationForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
  })
  const { t } = useTranslation<Namespace[]>(['public__auth'])
  const { onRegistration } = useRegistration()

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await onRegistration(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['registration-form']}>
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

      <FormGroup label={t('public__auth:input-agree')} error={errors.isAgree}>
        <Checkbox
          placeholder={t('public__auth:registration-agree')}
          label="isAgree"
          register={register}
        />
      </FormGroup>

      <div className={styles['registration-form__submit']}>
        <Button
          description={t('public__auth:registration')}
          type="submit"
          style={StyleType.TRANSPARENT}
        />
      </div>
    </form>
  )
}
