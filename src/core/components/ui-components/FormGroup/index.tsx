import React, { useEffect } from 'react'
import { IUiFormGroup } from './interface'
import { useSlots } from '../../../hooks'

import './style/styles.sass'

// TODO rewrite required, min, max and other to one props - options
export const UiFormGroup = ({
  label,
  children,
  errors,
  value,
}: IUiFormGroup) => {
  const slots = useSlots({ children })

  useEffect(() => {

  }, [])

  return (
    <div className="form-group">
      {errors[value]?.message && <h5>error</h5>}
      <label htmlFor={label} className="form-group__label">{label}</label>
      {slots.content}
    </div>
  )
}
