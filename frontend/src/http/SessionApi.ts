import $host from '.'
import { SessionType } from '../types/SessionType'

class SessionApi {
  static async getAll(): Promise<SessionType[]> {
    const { data } = await $host.get<SessionType[]>('/session')
    return data
  }

  static async getById(id: number): Promise<SessionType> {
    const { data } = await $host.get<SessionType>(`/session/${id}`)
    return data
  }

  static async create(session: SessionType): Promise<SessionType> {
    const { data } = await $host.post<SessionType>('/session', session)
    return data
  }

  static async update(id: number, session: SessionType): Promise<SessionType> {
    const { data } = await $host.put<SessionType>(`/session/${id}`, session)
    return data
  }

  static async delete(id: number): Promise<SessionType> {
    const { data } = await $host.delete<SessionType>(`/session/${id}`)
    return data
  }
}

export default SessionApi
