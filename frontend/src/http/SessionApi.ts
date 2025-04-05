import $host from '.'
import { SessionType } from '../types/SessionType'

class SessionApi {
  static async getAll() {
    const { data } = await $host.get('/session')
    return data
  }

  static async getById(id: number) {
    const { data } = await $host.get(`/session/${id}`)
    return data
  }

  static async create(session: SessionType) {
    const { data } = await $host.post('/session', session)
    return data
  }

  static async update(id: number, session: SessionType) {
    const { data } = await $host.put(`/session/${id}`, session)
    return data
  }

  static async delete(id: number) {
    const { data } = await $host.delete(`/session/${id}`)
    return data
  }
}

export default SessionApi
