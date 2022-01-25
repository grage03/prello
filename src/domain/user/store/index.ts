import { IUser } from '../interface'
import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

export class User {
  private user: IUser | null

  constructor() {
    makeAutoObservable(this)

    this.user = null
  }

  public getUser(): IUser | null {
    return this.user
  }

  public setUser(value: IUser): void {
    this.user = value
  }
}

export const UserContext = createContext({
  user: new User()
})