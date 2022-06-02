import { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface IUiInputProps {
  placeholder: string
  type: InputTypes
  label: string
  register: UseFormRegister<any>
  width?: string
  children?: ChildrenType
}

type ChildrenType = ReactElement | ReactElement[]
type InputTypes = 'email' | 'text' | 'password'

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
