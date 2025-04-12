import { makeAutoObservable } from 'mobx'
import { SeatType } from '../types/SeatType'

export class SeatStore {
  private seats: Array<SeatType>
  private selectedSeats: number[] = []

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

  public getSelectedSeats(): number[] {
    return this.selectedSeats
  }

  public toggleSeatSelection = (seatId: number) => {
    if (this.selectedSeats.includes(seatId)) {
      this.selectedSeats = this.selectedSeats.filter((id) => id !== seatId)
    } else {
      this.selectedSeats.push(seatId)
    }
  }
}
