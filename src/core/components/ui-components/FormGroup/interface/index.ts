import { ReactElement } from 'react'

export interface IUiFormGroup {
  label: string
  errors: any

  children?: ReactElement
}
