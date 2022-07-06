import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

import { Storage, useDispatch } from '../../../../../../../core'
import { IUser, loginUser } from '../../../../../../../domain'
import { ILoginForm } from '../../components/LoginForm/interface'
import { IUseLoginReturn } from './interface'
import { useUser } from '../../../../../../../domain/hooks/useUser'

export const useLogin = (): IUseLoginReturn => {
  const { user } = useUser()
  const navigate = useNavigate()
  const { dispatch } = useDispatch(loginUser)

  const updateUserInformation = () => {
    const storage = new Storage('local')
    const userProfile: IUser = jwtDecode(storage.getItem('jwt-token'))
    user.setUser(userProfile)
  }

  const onLogin = async (data: ILoginForm) => {
    const { email, password } = data
    await dispatch({ email, password }).then(() => {
      navigate('/')
      updateUserInformation()
    }).catch(() => console.log('error'))
  }

  return {
    onLogin,
  }
}
