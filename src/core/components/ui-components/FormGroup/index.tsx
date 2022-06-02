import React from 'react'
import { IUiFormGroupProps } from './interface'

import styles from './style/styles.module.sass'
import { Error } from './components/Error'

// TODO: delete memo
export const UiFormGroup = React.memo(({
  label,
  children,
  error,
}: IUiFormGroupProps) => {
  return (
    <div className={styles['form-group']}>
      <Error error={error} />
      {(label && !error) && <label htmlFor={label} className={styles['form-group__label']}>{label}</label>}
      {children}
    </div>
  )
})
