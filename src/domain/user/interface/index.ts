export interface IUser {
  id: number
  name: string
  email: string
  role: Roles.admin | Roles.member | null
  group: string | null
}

enum Roles {
  admin = 'ADMIN',
  member = 'MEMBER'
}
