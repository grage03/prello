import { ILoginForm } from '../../../components/LoginForm/interface'

export interface IUseLoginReturn {
  onLogin: OnLoginType
}

type OnLoginType = (data: ILoginForm) => Promise<void>

