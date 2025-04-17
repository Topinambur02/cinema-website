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

  public setAuth(bool: boolean): void {
    this.isAuth = bool
  }

  protected setUser(user: UserType): void {
    this.user = user
  }

  public async getCurrentUser(): Promise<UserType | null> {
    try {
      const user = await AuthApi.getCurrentUser()
      return user.data
    } 
    
    catch (error) {
      this.logout()
      return null
    }
  }

  public async login(email: string, password: string): Promise<void> {
    try {
      const response = await AuthApi.login(email, password)
      localStorage.setItem('token', response.data.access_token)
      await this.checkAuth()
      window.location.href = '/'
    } 
    
    catch (error) {
      if (error instanceof AxiosError && error.response?.status === 400) {
        alert('Неверный email или пароль')
      }
    }
  }

  public async register(email: string, password: string, role: string): Promise<void> {
    await AuthApi.register(email, password, role)
  }

  public async logout(): Promise<void> {
    try {
      await AuthApi.logout()
    } 
    
    finally {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.setAuth(false)
      this.setUser({} as UserType)
    }
  }

  public async checkAuth(): Promise<void> {
    const token = localStorage.getItem('token')

    if (!token) {
      this.logout()
      return
    }

    try {
      const user = await AuthApi.getCurrentUser()
      
      this.setAuth(true)
      this.setUser(user.data)
    } 
    
    catch (error) {
      this.logout()
    }
  }
}
