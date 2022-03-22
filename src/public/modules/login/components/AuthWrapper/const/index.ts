import { pageInformationType } from '../interface'

export const loginPlaceholder: pageInformationType = Object.freeze({
  page: 'login',
  to: 'registration',
  description: 'translation:public-login-help',
  value: 'translation:public-registration',
})

export const registrationPlaceholder: pageInformationType = Object.freeze({
  page: 'registration',
  to: 'login',
  description: 'translation:public-registration-help',
  value: 'translation:public-login',
})
