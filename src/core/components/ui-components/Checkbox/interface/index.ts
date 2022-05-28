import { UseFormRegister } from 'react-hook-form'

export interface IUiCheckBox {
  placeholder: string
  label: string
  required?: boolean
  register: UseFormRegister<any>
}
