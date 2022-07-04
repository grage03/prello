import { Message, MultipleFieldErrors, Ref } from 'react-hook-form'

export interface IError {
  error?: IErrorType
}

interface IErrorType {
  type: string
  ref?: Ref
  types?: MultipleFieldErrors
  message?: Message
}
