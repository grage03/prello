import React from 'react'
import { IUiFormGroup } from './interface'

import styles from './style/styles.module.sass'
import { Error } from './components/Error'

export const UiFormGroup = React.memo(({
  label,
  children,
  error,
}: IUiFormGroup) => {
  return (
    <div className={styles['form-group']}>
      <Error error={error} />
      {(label && !error) && <label htmlFor={label} className={styles['form-group__label']}>{label}</label>}
      {children}
    </div>
  )
})
