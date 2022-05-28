import { apiClient } from '../../../core/lib/api'
import { IUserCreate } from '../interface'

export const getUsers = async () => {
  return await apiClient.get('/users')
}

export const postUserRegistration = async ({ email, password }: IUserCreate) => {
  return await apiClient.post('/auth/registration', { email, password })
}

export const postUserLogin = async ({ email, password }: IUserCreate) => {
  return await apiClient.post('/auth/login', { email, password })
}
