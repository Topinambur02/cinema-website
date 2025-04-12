import $host from '.'
import { HallType } from '../types/HallType'

class HallApi {
  static async getAll(): Promise<HallType[]> {
    const { data } = await $host.get<HallType[]>('/hall')
    return data
  }

  static async getById(id: number): Promise<HallType> {
    const { data } = await $host.get<HallType>(`/hall/${id}`)
    return data
  }

  static async create(hall: HallType): Promise<HallType> {
    const { data } = await $host.post<HallType>('/hall', hall)
    return data
  }

  static async update(id: number, hall: HallType): Promise<HallType> {
    const { data } = await $host.put<HallType>(`/hall/${id}`, hall)
    return data
  }

  static async delete(id: number): Promise<HallType> {
    const { data } = await $host.delete<HallType>(`/hall/${id}`)
    return data
  }
}

export default HallApi
