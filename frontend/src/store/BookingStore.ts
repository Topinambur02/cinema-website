import { makeAutoObservable } from "mobx"
import { BookingType } from "../types/BookingType"

export class BookingStore {
    private bookings: BookingType[]
    private selectedSeats: number[] = []

    constructor() {
        this.bookings = []

        makeAutoObservable(this)
    }

    public setBookings(bookings: BookingType[]): void {
        this.bookings = bookings
    }

    public getBookings(): BookingType[] {
        return this.bookings
    }

    public setSelectedSeats(seats: number[]): void {
        this.selectedSeats = seats
    }

    public getSelectedSeats(): number[] {
        return this.selectedSeats
    }
    
}