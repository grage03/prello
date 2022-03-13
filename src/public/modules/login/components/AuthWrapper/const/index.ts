import { pageInformationType } from '../interface'

export const loginPlaceholder: pageInformationType = Object.freeze({
  page: 'login',
  description: 'Don\'t have an account yet?',
  to: 'Registration',
})

export const registrationPlaceholder: pageInformationType = Object.freeze({
  page: 'registration',
  description: 'Do you already have an account?',
  to: 'Login',
})
