import React, { useEffect } from 'react'
import { IUiFormGroup } from './interface'
import { useSlots } from '../../../hooks'

import './style/styles.sass'

// TODO rewrite required, min, max and other to one props - options
export const UiFormGroup = ({ label, children, errors }: IUiFormGroup) => {
  const slots = useSlots({ children })

  useEffect(() => {
    console.log(errors)
  }, [ errors ])

  return (
    <div className="form-group">
      <label htmlFor={label} className="form-group__label">{label}</label>
      {slots.content}
    </div>
  )
}
