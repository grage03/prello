import React from 'react'
import { IFormGroupProps } from './interface'

import styles from './style/styles.module.sass'
import { Error } from './components/Error'

// TODO: delete memo
export const FormGroup = React.memo(({
  label,
  children,
  error,
}: IFormGroupProps) => {
  return (
    <div className={styles['form-group']}>
      <Error error={error} />
      {(label && !error) && <label htmlFor={label} className={styles['form-group__label']}>{label}</label>}
      {children}
    </div>
  )
})
