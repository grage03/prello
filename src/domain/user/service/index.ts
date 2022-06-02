import { getUsers, postUserLogin, postUserRegistration } from '../api'
import {
  IPostUserLoginProps,
  IPostUserLoginReturn,
  IPostUserRegistrationProps,
  IPostUserRegistrationReturn,
} from '../interface'
import { Storage } from '../../../core/lib/utilities/storage'

export const getUsersList = async () => {
  const response = await getUsers()

  return response.data
}

// TODO: add return type
export const createUser = async (user: IPostUserRegistrationProps): Promise<IPostUserRegistrationReturn> => {
  const response = await postUserRegistration(user)

  return response.data
}

export const loginUser = async (user: IPostUserLoginProps): Promise<IPostUserLoginReturn> => {
  const storage = new Storage('local')
  const response = await postUserLogin(user).then(({ data }) => {
    storage.setItem('jwt-token', data.token)
    return data
  })

  return response.data
}
