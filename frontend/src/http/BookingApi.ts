import $host from "."
import { BookingType } from "../types/BookingType"
import { CreateBookingType } from "../types/CreateBookingType"
import { TicketsSold } from "../types/TicketsSold"
import { UpdateBookingType } from "../types/UpdateBookingType"

class BookingApi{
    static async getAll(): Promise<BookingType[]> {
        const { data } = await $host.get<BookingType[]>('/booking')
        return data
    }

    static async get_by_id(id: number): Promise<BookingType> {
        const { data } = await $host.get<BookingType>(`/booking/${id}`)
        return data
    }

    static async get_tickets_sold(): Promise<Array<[string, number]>> {
        const { data } = await $host.get<Array<[string, number]>>('/booking/tickets_sold')
        return data
    }

    static async create(dtos: CreateBookingType[]): Promise<BookingType[]> {
        const { data } = await $host.post<BookingType[]>('/booking', dtos)
        return data
    }

    static async update(id: number, dto: UpdateBookingType): Promise<BookingType> {
        const { data } = await $host.put<BookingType>(`/booking/${id}`, dto)
        return data
    }

    static async delete(id: number): Promise<BookingType> {
        const { data } = await $host.delete<BookingType>(`/booking/${id}`)
        return data
    }
}

export default BookingApi