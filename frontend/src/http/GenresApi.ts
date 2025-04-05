import $host from '.'
import { GenreType } from '../types/GenreType'

class GenresApi {
  static async getAll() {
    const { data } = await $host.get('/genre')
    return data
  }

  static async getById(id: number) {
    const { data } = await $host.get(`/genre/${id}`)
    return data
  }

  static async create(genre: GenreType) {
    const { data } = await $host.post('/genre', genre)
    return data
  }

  static async update(id: number, genre: GenreType) {
    const { data } = await $host.put(`/genre/${id}`, genre)
    return data
  }

  static async delete(id: number) {
    const { data } = await $host.delete(`/genre/${id}`)
    return data
  }
}

export default GenresApi
