import { useContext } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { Storage } from '../../../../../../../core/lib/utilities/storage'
import { IUser } from '../../../../../../../domain/user/interface'
import { Context } from '../../../../../../index'
import { ILoginForm } from '../../components/LoginForm/interface'
import { useDispatch } from '../../../../../../../core/hooks'
import { loginUser } from '../../../../../../../domain/user/service'
import { IUseLoginReturn } from './interface'

export const useLogin = (): IUseLoginReturn => {
  const { userStore } = useContext(Context)
  const navigate = useNavigate()
  const { dispatch, data: response } = useDispatch(loginUser)

  const updateUserInformation = () => {
    const storage = new Storage('local')
    const user: IUser = jwtDecode(storage.getItem('jwt-token'))
    userStore.setUser(user)
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
