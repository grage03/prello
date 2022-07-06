export interface IUser {
  email: string
  exp: number
  iat: number
  id: number
}

export interface IPostUserRegistrationProps {
  email: string
  password: string
}

export interface IPostUserRegistrationReturn {
  token: string
}

export interface IPostUserLoginReturn extends IPostUserRegistrationReturn {}

export interface IPostUserLoginProps extends IPostUserRegistrationProps {}
