import { UseFormRegister } from 'react-hook-form'

export interface ICheckBoxProps {
  label: string
  placeholder: string
  register: UseFormRegister<any>
  required?: boolean
}
