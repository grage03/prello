import { useContext } from 'react'
import { AppContext } from '../../../App'
import { IUseUserResult } from './interface'

export const useUser = (): IUseUserResult => {
  const { userStore } = useContext(AppContext)

  return { user: userStore }
}
