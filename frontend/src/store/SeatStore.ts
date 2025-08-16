import { makeAutoObservable } from 'mobx'
import { SeatType } from '../types/SeatType'

export class SeatStore {
  private seats: SeatType[]

  constructor() {
    this.seats = []

    makeAutoObservable(this)
  }

  public setSeats(seats: SeatType[]): void {
    this.seats = seats
  }

  public getSeats(): SeatType[] {
    return this.seats
  }

}
