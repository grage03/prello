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

import './style/styles.sass'

export const RegistrationForm = () => {
  const { handleSubmit } = useForm<IRegistrationForm>()
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    return data
  }

  const loginUser = () => {
    return 'ok'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <UiFormGroup label={t('translation:input-email')}>
        <UiInput placeholder={t('translation:email-placeholder')} type="email" key="content" />
      </UiFormGroup>

      <UiFormGroup label={t('translation:input-password')}>
        <UiInput placeholder={t('translation:password-placeholder')} type="password" key="content" />
      </UiFormGroup>

      <UiCheckBox label={t('translation:public-registration-agree')} />

      <div className="registration-form__submit">
        <UiButton description={t('translation:public-registration')} onClick={loginUser} width="100%" transparent />
      </div>
    </form>
  )
}
