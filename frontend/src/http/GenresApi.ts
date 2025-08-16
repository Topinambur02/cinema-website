import $host from '.'
import { GenreType } from '../types/GenreType'

class GenresApi {
  static async getAll(): Promise<GenreType[]> {
    const { data } = await $host.get<GenreType[]>('/genre')
    return data
  }

  static async getById(id: number): Promise<GenreType> {
    const { data } = await $host.get<GenreType>(`/genre/${id}`)
    return data
  }

  static async create(genre: GenreType): Promise<GenreType> {
    const { data } = await $host.post<GenreType>('/genre', genre)
    return data
  }

  static async update(id: number, genre: GenreType): Promise<GenreType> {
    const { data } = await $host.put<GenreType>(`/genre/${id}`, genre)
    return data
  }

  static async delete(id: number): Promise<GenreType> {
    const { data } = await $host.delete<GenreType>(`/genre/${id}`)
    return data
  }
}

export default GenresApi
