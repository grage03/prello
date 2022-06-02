export interface IUser {
  id: number
  email: string
  iat: number
  exp: number
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
