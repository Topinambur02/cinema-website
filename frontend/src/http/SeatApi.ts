import $host from "."
import { CreateSeatType } from "../types/CreateSeatType"

class SeatApi {
    static async getAll() {
        const { data } = await $host.get('/seat')
        return data
    }

    static async getById(id: number) {
        const { data } = await $host.get(`/seat/${id}`)
        return data
    }

    static async create(seat: CreateSeatType) {
        const { data } = await $host.post('/seat', seat)
        return data
    }

    static async update(id: number, seat: CreateSeatType) {
        const { data } = await $host.put(`/seat/${id}`, seat)
        return data
    }

    static async delete(id: number) {
        const { data } = await $host.delete(`/seat/${id}`)
        return data
    }
}

export default SeatApi
