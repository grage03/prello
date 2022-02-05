import { IUser } from '../interface'
import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

export class User {
  private user: IUser | null  // store

  constructor() {
    makeAutoObservable(this)

    this.user = null
  }

  public getUser(): IUser | null {  // getter
    return this.user
  }

  public setUser(value: IUser): void {  // action
    this.updateUser(value)
  }

  private updateUser(value: IUser): void {  // mutation
    this.user = value
  }
}

export const UserContext = createContext({
  user: new User()
})