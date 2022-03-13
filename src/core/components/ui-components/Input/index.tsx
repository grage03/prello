import React, { useState } from 'react'
import classNames from 'classnames'
import { UiInputProps } from './interface'

import './style/styles.sass'
import { useSlots } from '../../../hooks/useSlots/useSlots'

export const UiInput = ({
  placeholder,
  width,
  type = "text",
  children,
}: UiInputProps) => {
  const slots = useSlots({ children })
  const classes = classNames({
    'form-input__item': true,
    'form-input__item--button': slots.button,
  })

  const [ value, setValue ] = useState('')

  const onUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="form-input" style={{ width: width || 'auto' }}>
      <input
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={onUserChangeInput}
        type={type}
      />
      {slots.button}
    </div>
  )
}
