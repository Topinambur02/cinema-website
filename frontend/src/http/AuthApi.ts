import { AxiosResponse } from 'axios'
import $host from '.'
import { AuthResponse } from '../types/response/AuthResponse'
import { UserType } from '../types/UserType'
import { RegResponse } from '../types/response/RegResponse'

const FORM_URLENCODED_HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

export class AuthApi {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    const params = new URLSearchParams({ username: email, password })

    return $host.post<AuthResponse>('auth/login', params, { headers: FORM_URLENCODED_HEADERS })
  }

  static async register(email: string, password: string, role: string): Promise<AxiosResponse<RegResponse>> {
    return $host.post<RegResponse>('auth/register', { email, password, role })
  }

  static async logout(): Promise<AxiosResponse<void>> {
    return $host.post<void>('auth/logout')
  }

  static async getCurrentUser(): Promise<AxiosResponse<UserType>> {
    return $host.get<UserType>('user/me')
  }
}
