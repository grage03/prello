import { UseFormRegister } from 'react-hook-form'

export interface ICheckBoxProps {
  placeholder: string
  label: string
  required?: boolean
  register: UseFormRegister<any>
}
