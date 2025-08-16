import $host from '.'
import { MovieType } from '../types/MovieType'

class MoviesApi {
  static async getAll(): Promise<MovieType[]> {
    const { data } = await $host.get<MovieType[]>('/movie')
    return data
  }

  static async getById(id: number): Promise<MovieType> {
    const { data } = await $host.get<MovieType>(`/movie/${id}`)
    return data
  }

  static async create(movie: MovieType): Promise<MovieType> {
    const { data } = await $host.post<MovieType>('/movie', movie)
    return data
  }

  static async update(id: number, movie: MovieType): Promise<MovieType> {
    const { data } = await $host.put<MovieType>(`/movie/${id}`, movie)
    return data
  }

  static async delete(id: number): Promise<MovieType> {
    const { data } = await $host.delete<MovieType>(`/movie/${id}`)
    return data
  }
}

export default MoviesApi
