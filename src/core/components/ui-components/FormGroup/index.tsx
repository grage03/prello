import React from 'react'
import { IUiFormGroup } from './interface'
import { useSlots } from '../../../hooks/useSlots/useSlots'

import './style/styles.sass'

// TODO rewrite required, min, max and other to one props - options
export const UiFormGroup = ({ label, children }: IUiFormGroup) => {
  const slots = useSlots({ children })

  return (
    <div className="form-group">
      <label htmlFor={label} className="form-group__label">{label}</label>
      {slots.content}
    </div>
  )
}
