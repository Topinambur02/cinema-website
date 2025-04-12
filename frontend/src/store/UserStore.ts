import { makeAutoObservable } from 'mobx'
import { UserType } from '../types/UserType'
import { AuthApi } from '../http/AuthApi'
import { AxiosError } from 'axios'

export class UserStore {
  private user: UserType | null
  isAuth: boolean

  constructor() {
    const storedUser = localStorage.getItem('user')
    this.user = storedUser ? JSON.parse(storedUser) : null
    this.isAuth = !!localStorage.getItem('token')
    makeAutoObservable(this)
  }

  public setAuth(bool: boolean) {
    this.isAuth = bool
  }

  public setUser(user: UserType) {
    this.user = user
  }

  public getUser() {
    return this.user
  }

  async login(email: string, password: string) {
    const response = await AuthApi.login(email, password)
    localStorage.setItem('token', response.data.access_token)
    const user = await AuthApi.getCurrentUser()
    localStorage.setItem('user', JSON.stringify(user.data))
    this.setAuth(true)
    this.setUser(user.data)
  }

  async register(email: string, password: string, role: string) {
    await AuthApi.register(email, password, role)
  }

  async logout() {
    try {
      await AuthApi.logout()
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        console.log('Token expired, logging out...')
      }
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.setAuth(false)
      this.setUser({} as UserType)
    }
  }
}
