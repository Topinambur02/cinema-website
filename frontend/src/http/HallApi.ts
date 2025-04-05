import $host from '.'
import { HallType } from '../types/HallType'

class HallApi {
  static async getAll() {
    const { data } = await $host.get('/hall')
    return data
  }

  static async getById(id: number) {
    const { data } = await $host.get(`/hall/${id}`)
    return data
  }

  static async create(hall: HallType) {
    const { data } = await $host.post('/hall', hall)
    return data
  }

  static async update(id: number, hall: HallType) {
    const { data } = await $host.put(`/hall/${id}`, hall)
    return data
  }

  static async delete(id: number) {
    const { data } = await $host.delete(`/hall/${id}`)
    return data
  }
}

export default HallApi
