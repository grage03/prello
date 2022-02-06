import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { IUser } from '../interface'

export class User {
  // store
  private user: IUser | null

  constructor() {
    makeAutoObservable(this)

    this.user = null
  }

  // getter
  public getUser(): IUser | null {
    return this.user
  }

  // action
  public setUser(value: IUser): void {
    this.updateUser(value)
  }

  // mutation
  private updateUser(value: IUser): void {
    this.user = value
  }
}

export const UserContext = createContext({
  user: new User(),
})
