import React from 'react'
import { IUiFormGroup } from './interface'

import './style/styles.sass'

export const UiFormGroup = React.memo(({
  label,
  children,
  errors,
  value,
}: IUiFormGroup) => {
  const error = errors[value]?.message
  console.log(error)
  return (
    <div className="form-group">
      {error ? (
        <h5>{error}</h5>
      ) : (label ? <label htmlFor={label} className="form-group__label">{label}</label> : null)}
      {children}
    </div>
  )
})
