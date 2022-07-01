import { pageInformationType } from '../interface'

export const loginPlaceholder: pageInformationType = Object.freeze({
  page: 'login',
  description: 'public__auth:login-help',
  value: 'registration',
})

export const registrationPlaceholder: pageInformationType = Object.freeze({
  page: 'registration',
  description: 'public__auth:registration-help',
  value: 'login',
})
