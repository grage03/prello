import { ReactElement } from 'react'

export interface IUiFormGroup {
  label?: string
  errors: any
  value: string
  children?: ReactElement
}
