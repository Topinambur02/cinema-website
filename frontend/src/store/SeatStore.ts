import { makeAutoObservable } from "mobx";
import { SeatType } from "../types/SeatType";

export class SeatStore {
    private seats: Array<SeatType>

    constructor() {
        this.seats = []

        makeAutoObservable(this)
    }

    public setSeats(seats: Array<SeatType>): void {
        this.seats = seats
    }

    public getSeats(): Array<SeatType> {
        return this.seats
    }
}
