import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { IRegistrationForm } from './interface'
import {
  UiButton,
  UiFormGroup,
  UiInput,
  UiCheckBox,
} from '../../../../../../../core/components/ui-components'

import styles from './style/styles.module.sass'
import { schema } from './schema'

export const RegistrationForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
  })
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data)
  }

  const loginUser = () => {
    return 'ok'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['registration-form']}>
      <UiFormGroup label={t('translation:input-email')} error={errors.email}>
        <UiInput
          placeholder={t('translation:email-placeholder')}
          type="email"
          label="email"
          register={register}
        />
      </UiFormGroup>

      <UiFormGroup label={t('translation:input-password')} error={errors.password}>
        <UiInput
          placeholder={t('translation:password-placeholder')}
          type="password"
          label="password"
          register={register}
        />
      </UiFormGroup>

      <UiFormGroup label={t('translation:input-agree')} error={errors.isAgree}>
        <UiCheckBox
          placeholder={t('translation:public-registration-agree')}
          label="isAgree"
          register={register}
        />
      </UiFormGroup>

      <div className={styles['registration-form__submit']}>
        <UiButton
          description={t('translation:public-registration')}
          onClick={loginUser}
          width="100%"
          transparent
          type="submit"
        />
      </div>
    </form>
  )
}
