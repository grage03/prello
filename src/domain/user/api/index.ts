import { apiClient } from '../../../core'
import { IPostUserLoginProps, IPostUserRegistrationProps } from '../interface'

export const getUsers = async () => {
  const result = await apiClient.get('/users')
  return result
}

export const postUserRegistration = async ({ email, password }: IPostUserRegistrationProps) => {
  const result = await apiClient.post('/auth/registration', { email, password })
  return result
}

export const postUserLogin = async ({ email, password }: IPostUserLoginProps) => {
  const result = await apiClient.post('/auth/login', { email, password })
  return result
}
