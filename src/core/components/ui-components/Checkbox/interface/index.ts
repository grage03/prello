import { UseFormRegister } from 'react-hook-form'

export interface IUiCheckBoxProps {
  placeholder: string
  label: string
  required?: boolean
  register: UseFormRegister<any>
}
