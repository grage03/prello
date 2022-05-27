import React from 'react'
import classNames from 'classnames'
import { UiInputProps } from './interface'

import './style/styles.sass'
import { useSlots } from '../../../hooks'

export const UiInput = ({
  placeholder,
  width,
  type = "text",
  register,
  children,
  label,
}: UiInputProps) => {
  const slots = useSlots({ children })
  const classes = classNames({
    'form-input__item': true,
    'form-input__item--button': slots.button,
  })

  return (
    <div className="form-input" style={{ width: width || 'auto' }}>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        {...register(label)}
      />
      {slots.button}
    </div>
  )
}
