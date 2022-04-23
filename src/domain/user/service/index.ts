import { getUsers } from '../api'

export const getUsersList = async () => {
  const response = await getUsers()

  return response.data
}
