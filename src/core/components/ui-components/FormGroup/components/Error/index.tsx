import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { IError } from './interface'
import { Namespace } from '../../../../../lib'

import styles from './style/styles.module.sass'

enum TYPES {
  IS_VALUE = "is-value",
  REQUIRED = "required",
}

type ErrorMessageType = {
  [key: string]: string
}

export const Error = ({ error }: IError) => {
  const { t } = useTranslation<Namespace[]>(['error__message'])

  const message = useMemo(() => {
    const errorMessage: ErrorMessageType = {
      [TYPES.IS_VALUE]: t('error__message:is_value-field'),
      [TYPES.REQUIRED]: t('error__message:required-field'),
    }

    return errorMessage[error?.type as string]
  }, [ error, t ])

  if (!error) return null
  return <label htmlFor={error.message} className={styles['error__text']}>{message}</label>
}
