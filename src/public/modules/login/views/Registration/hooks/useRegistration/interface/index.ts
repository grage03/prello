import { IRegistrationForm } from '../../../components/RegistrationForm/interface'

export interface IUseRegistrationReturn {
  onRegistration: OnRegistrationType
}

type OnRegistrationType = (data: IRegistrationForm) => Promise<void>
