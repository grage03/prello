import { useNavigate } from 'react-router-dom'
import { IRegistrationForm } from '../../components/RegistrationForm/interface'
import { useDispatch } from '../../../../../../../core/hooks'
import { createUser } from '../../../../../../../domain/user/service'

export const useRegistration = () => {
  const navigate = useNavigate()
  const { dispatch, data: response } = useDispatch(createUser)

  const onRegistration = async (data: IRegistrationForm) => {
    const { email, name, password } = data
    await dispatch({ email, name, password }).then(() => navigate('/login'))
  }

  return {
    onRegistration,
  }
}
