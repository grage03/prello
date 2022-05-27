import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IRegistrationForm } from './interface'
import {
  UiButton,
  UiFormGroup,
  UiInput,
  UiCheckBox,
} from '../../../../../../../core/components/ui-components'

import styles from './style/styles.module.sass'

export const RegistrationForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<IRegistrationForm>()
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data)
  }

  const loginUser = () => {
    return 'ok'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['registration-form']}>
      <UiFormGroup label={t('translation:input-email')} errors={errors}>
        <UiInput
          placeholder={t('translation:email-placeholder')}
          type="email"
          label="email"
          register={register}
          key="content"
          required
        />
      </UiFormGroup>

      <UiFormGroup label={t('translation:input-password')} errors={errors}>
        <UiInput
          placeholder={t('translation:password-placeholder')}
          type="password"
          key="content"
          label="password"
          register={register}
          required
        />
      </UiFormGroup>

      <UiCheckBox
        placeholder={t('translation:public-registration-agree')}
        label="isAgree"
        register={register}
        required
      />

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
