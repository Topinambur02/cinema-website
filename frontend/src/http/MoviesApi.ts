import $host from "."
import { MovieType } from "../types/MovieType"

class MoviesApi {
    static async getAll() {
        const { data } = await $host.get('/movie') 
        return data
    }

    static async getById(id: number) {
        const { data } = await $host.get(`/movie/${id}`)
        return data
    }

    static async create(movie: MovieType) {
        const { data } = await $host.post('/movie', movie)
        return data
    }

    static async update(id: number, movie: MovieType) {
        const { data } = await $host.put(`/movie/${id}`, movie)
        return data
    }

    static async delete(id: number) {
        const { data } = await $host.delete(`/movie/${id}`)
        return data
    }
}

export default MoviesApi