import $host from '.'

class ImagesApi {
  static async getAll() {
    const { data } = await $host.get('/image')
    return data
  }

  static async getById(id: number) {
    const { data } = await $host.get(`/image/${id}`)
    return data
  }

  static async create(image: FormData) {
    const { data } = await $host.post('/image', image)
    return data
  }

  static async update(id: number, image: FormData) {
    const { data } = await $host.put(`/image/${id}`, image)
    return data
  }

  static async delete(id: number) {
    const { data } = await $host.delete(`/image/${id}`)
    return data
  }
}

export default ImagesApi
