import React from 'react'
import { useTranslation } from 'react-i18next'
import { IError } from './interface'

import styles from './style/styles.module.sass'

enum TYPES {
  REQUIRED = "required",
  IS_VALUE = "is-value",
}

type ErrorMessageType = {
  [key: string]: string
}

const getErrorMessage = (type: string) => {
  const { t } = useTranslation()
  const errorMessage: ErrorMessageType = {
    [TYPES.REQUIRED]: t('translation:required-field'),
    [TYPES.IS_VALUE]: t('translation:is_value-field'),
  }

  return errorMessage[type]
}

export const Error = ({ error }: IError) => {
  if (!error) return null
  return <label htmlFor={error.message} className={styles['error__text']}>{getErrorMessage(error.type)}</label>
}
