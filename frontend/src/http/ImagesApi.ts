import $host from '.'
import { ImageType } from '../types/ImageType'

class ImagesApi {
  static async getAll(): Promise<ImageType[]> {
    const { data } = await $host.get<ImageType[]>('/image')
    return data
  }

  static async getById(id: number): Promise<ImageType> {
    const { data } = await $host.get<ImageType>(`/image/${id}`)
    return data
  }

  static async create(image: FormData): Promise<ImageType> {
    const { data } = await $host.post<ImageType>('/image', image)
    return data
  }

  static async update(id: number, image: FormData): Promise<ImageType> {
    const { data } = await $host.put<ImageType>(`/image/${id}`, image)
    return data
  }

  static async delete(id: number): Promise<ImageType> {
    const { data } = await $host.delete<ImageType>(`/image/${id}`)
    return data
  }
}

export default ImagesApi
