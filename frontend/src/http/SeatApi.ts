import $host from '.'
import { CreateSeatType } from '../types/CreateSeatType'
import { SeatType } from '../types/SeatType'

class SeatApi {
  static async getAll(): Promise<SeatType[]> {
    const { data } = await $host.get<SeatType[]>('/seat')
    return data
  }

  static async getById(id: number): Promise<SeatType> {
    const { data } = await $host.get<SeatType>(`/seat/${id}`)
    return data
  }

  static async create(seat: CreateSeatType): Promise<SeatType> {
    const { data } = await $host.post<SeatType>('/seat', seat)
    return data
  }

  static async update(id: number, seat: CreateSeatType): Promise<SeatType> {
    const { data } = await $host.put<SeatType>(`/seat/${id}`, seat)
    return data
  }

  static async delete(id: number): Promise<SeatType> {
    const { data } = await $host.delete<SeatType>(`/seat/${id}`)
    return data
  }
}

export default SeatApi
