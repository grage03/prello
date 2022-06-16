import React from 'react'
import { ICheckBoxProps } from './interface'

import './style/styles.sass'

export const Checkbox = ({
  label,
  required,
  register,
  placeholder,
}: ICheckBoxProps) => {
  return (
    <div>
      <input id={label} type="checkbox" {...register(label, { required })} />
      <label htmlFor={label}>{placeholder}</label>
    </div>
  )
}
