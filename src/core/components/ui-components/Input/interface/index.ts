import { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface IInputProps {
  children?: ChildrenType
  label: string
  placeholder: string
  register: UseFormRegister<any>
  type: InputTypes
  width?: string
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
