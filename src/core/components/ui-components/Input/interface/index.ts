import { ReactElement } from 'react'

export interface UiInputProps {
  placeholder: string;
  type: 'email' | 'text' | 'password';

  width?: string;
  children?: ReactElement | ReactElement[];
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
