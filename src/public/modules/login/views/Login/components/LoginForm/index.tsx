import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { ILoginForm } from './interface'
import { UiButton, UiFormGroup, UiInput } from '../../../../../../../core/components/ui-components'

import styles from './style/styles.module.sass'
import { Context } from '../../../../../../index'
import { schema } from './schema'
import { useDispatch } from '../../../../../../../core/hooks'
import { loginUser } from '../../../../../../../domain/user/service'
import { Storage } from '../../../../../../../core/lib/utilities/storage'
import { IUser } from '../../../../../../../domain/user/interface'

//TODO: move all logic with login in custom hook
export const LoginForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  })
  const { t } = useTranslation()
  const { dispatch } = useDispatch(loginUser)
  const navigate = useNavigate()
  const { userStore } = useContext(Context)

  const updateUserInformation = () => {
    const storage = new Storage('local')
    const user: IUser = jwtDecode(storage.getItem('jwt-token'))
    userStore.setUser(user)
  }

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const { email, password } = data
    await dispatch({ email, password }).then(() => {
      navigate('/')
      updateUserInformation()
    }).catch(() => console.log('error'))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
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

      <UiButton description={t('translation:public-login')} width="100%" type="submit" />
    </form>
  )
}
