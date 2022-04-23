import { apiClient } from '../../../core/lib/api'

export const getUsers = async () => {
  return await apiClient.get('/users')
}
