import React, { useState } from 'react'
import { UiInputProps } from './interface'

import './style/styles.sass'
import { UiButton } from '../Button'

export const UiInput = ({
  placeholder,
  autocomplete = "off",
  disabled,
  width,
  limit,
  type = "text",
  isButton,
}: UiInputProps) => {
  const [ value, setValue ] = useState('')

  const onUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onUserClickButton = () => {
    return true
  }

  return (
    <div className="input" style={{ width: width || '100%' }}>
      <input
        className="input__item"
        placeholder={placeholder}
        value={value}
        onChange={onUserChangeInput}
        autoComplete={autocomplete}
        type={type}
        disabled={disabled}
        maxLength={limit}
      />
      {
        isButton && <UiButton description="Join Now" onClick={onUserClickButton} width="30%" />
      }
    </div>
  )
}
