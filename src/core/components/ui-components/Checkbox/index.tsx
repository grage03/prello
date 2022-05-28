import React from 'react'
import { IUiCheckBox } from './interface'

import './style/styles.sass'

export const UiCheckBox = ({
  label,
  required,
  register,
  placeholder,
}: IUiCheckBox) => {
  return (
    <div>
      <input id={label} type="checkbox" {...register(label, { required })} />
      <label htmlFor={label}>{placeholder}</label>
    </div>
  )
}
