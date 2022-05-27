import { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface UiInputProps {
  placeholder: string
  type: 'email' | 'text' | 'password'

  label: string
  required?: boolean
  register: UseFormRegister<any>
  width?: string
  children?: ReactElement | ReactElement[]
}

// EMAIL = 'email,
// COLOR = 'color',
// DATE = 'date',
// DATETIME = 'datetime',
// NUMBER = 'number',
// RANGE = 'range',
// SEARCH = 'search',
// TEL = 'tel',
// TIME = 'time',
// URL = 'url',
// MONTH = 'month',
// WEEK = 'week',
