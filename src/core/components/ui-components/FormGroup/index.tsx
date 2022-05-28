import React from 'react'
import { IUiFormGroup } from './interface'

import './style/styles.sass'
import { Error } from './components/Error'

export const UiFormGroup = React.memo(({
  label,
  children,
  error,
}: IUiFormGroup) => {
  return (
    <div className="form-group">
      <Error error={error} />
      {(label && !error) && <label htmlFor={label} className="form-group__label">{label}</label>}
      {children}
    </div>
  )
})
