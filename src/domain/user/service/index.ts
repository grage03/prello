import { getUsers, postUserLogin, postUserRegistration } from '../api'
import { IUserCreate } from '../interface'
import { Storage } from '../../../core/lib/utilities/storage'

export const getUsersList = async () => {
  const response = await getUsers()

  return response.data
}

export const createUser = async (user: IUserCreate) => {
  const response = await postUserRegistration(user)

  return response.data
}

export const loginUser = async (user: IUserCreate) => {
  const storage = new Storage('local')
  const response = await postUserLogin(user).then(({ data }) => {
    storage.setItem('jwt-token', data.token)
    return data
  })

  return response.data
}
