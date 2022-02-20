export interface UiInputProps {
  placeholder: string
  type: 'email' | 'text'

  autocomplete?: string
  disabled?: boolean
  width?: string
  limit?: number
  isButton?: boolean
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
