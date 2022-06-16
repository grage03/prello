import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { IRegistrationForm } from './interface'
import {
  Button,
  FormGroup,
  Input,
  Checkbox,
} from '../../../../../../../core/components'

import styles from './style/styles.module.sass'
import { schema } from './schema'
import { useRegistration } from '../../hooks/useRegistration'

export const RegistrationForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
  })
  const { t } = useTranslation()
  const { onRegistration } = useRegistration()

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await onRegistration(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['registration-form']}>
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

      <FormGroup label={t('translation:input-agree')} error={errors.isAgree}>
        <Checkbox
          placeholder={t('translation:public-registration-agree')}
          label="isAgree"
          register={register}
        />
      </FormGroup>

      <div className={styles['registration-form__submit']}>
        <Button
          description={t('translation:public-registration')}
          width="100%"
          transparent
          type="submit"
        />
      </div>
    </form>
  )
}
