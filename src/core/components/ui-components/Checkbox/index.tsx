import React from 'react'
import { IUiCheckBox } from './interface'

import './style/styles.sass'

export const UiCheckBox = ({ label }: IUiCheckBox) => {
  return (
    <div>
      <input id={label} type="checkbox" />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
