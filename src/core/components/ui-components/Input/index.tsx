import React, { useState } from 'react'
import { UiInputProps } from './interface'

import './style/styles.sass'
import { useSlots } from '../../../hooks/useSlots/useSlots'

export const UiInput = ({
  placeholder,
  autocomplete = "off",
  disabled,
  width,
  limit,
  label,
  required,
  register,
  type = "text",
  children,
}: UiInputProps) => {
  const [ value, setValue ] = useState('')
  const slots = useSlots({ children })

  const onUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="form-input" style={{ width: width || '100%' }}>
      <label className="form-input__label" htmlFor={label}>{label}</label>
      <input
        {...register(label, { required })}
        id={label}
        className="form-input__item"
        placeholder={placeholder}
        value={value}
        onChange={onUserChangeInput}
        autoComplete={autocomplete}
        type={type}
        disabled={disabled}
        maxLength={limit}
      />
      {slots.button}
    </div>
  )
}
