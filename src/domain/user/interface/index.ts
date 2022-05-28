export interface IUser {
  id: number
  email: string
  iat: number
  exp: number
}

export interface IUserCreate {
  email: string
  password: string
}
