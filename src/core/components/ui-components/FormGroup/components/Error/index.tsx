import React from 'react'
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
  const errorMessage: ErrorMessageType = {
    [TYPES.REQUIRED]: 'This field must be filled in',
    [TYPES.IS_VALUE]: 'This field must be selected',
  }

  return errorMessage[type]
}

// TODO: maybe delete error and add error.type
export const Error = ({ error }: IError) => {
  if (!error) return null
  return <label htmlFor={error.message} className={styles['error__text']}>{getErrorMessage(error.type)}</label>
}
