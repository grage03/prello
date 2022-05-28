import { makeAutoObservable } from 'mobx'
import { IUser } from '../interface'

export class User {
  private user: IUser | null

  constructor() {
    makeAutoObservable(this)

    this.user = null
  }

  public get profile(): IUser | null {
    return this.user
  }

  public setUser(value: IUser): void {
    this.updateUser(value)
  }

  private updateUser(value: IUser): void {
    this.user = value
  }
}

export const userStore = new User()
