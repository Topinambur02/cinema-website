import { AxiosResponse } from "axios";
import $host from ".";
import { AuthResponse } from "../types/response/AuthResponse";
import { UserType } from "../types/UserType";
import { RegResponse } from "../types/response/RegResponse";

export class AuthApi {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        const params = new URLSearchParams()

        params.append('username', email)
        params.append('password', password)

        return await $host.post<AuthResponse>('auth/login', params, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
    }

    static async registration(email: string, password: string, role: string): Promise<AxiosResponse<RegResponse>> {
        return await $host.post<RegResponse>('auth/register', { email, password, role })
    }

    static async logout(): Promise<void> {
        await $host.post('auth/logout')
    }

    static async me(): Promise<AxiosResponse<UserType>> {
        return await $host.get('user/me')
    }
}