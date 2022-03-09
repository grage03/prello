import { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IFormValues {
  [value: string]: string;
}

export interface UiInputProps {
  placeholder: string;
  type: 'email' | 'text';
  label: string;
  register: UseFormRegister<IFormValues>;

  required?: boolean;
  autocomplete?: string
  disabled?: boolean
  width?: string
  limit?: number
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
