import { apiClient } from '../../../core'
import { IPostUserLoginProps, IPostUserRegistrationProps } from '../interface'

export const getUsers = async () => {
  return await apiClient.get('/users')
}

export const postUserRegistration = async ({ email, password }: IPostUserRegistrationProps) => {
  return await apiClient.post('/auth/registration', { email, password })
}

export const postUserLogin = async ({ email, password }: IPostUserLoginProps) => {
  return await apiClient.post('/auth/login', { email, password })
}
