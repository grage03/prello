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

export const Error = ({ error }: IError) => {
  const { t } = useTranslation()

  const getErrorMessage = (type: string) => {
    const errorMessage: ErrorMessageType = {
      [TYPES.REQUIRED]: t('translation:required-field'),
      [TYPES.IS_VALUE]: t('translation:is_value-field'),
    }

    return errorMessage[type]
  }

  if (!error) return null
  return <label htmlFor={error.message} className={styles['error__text']}>{getErrorMessage(error.type)}</label>
}
