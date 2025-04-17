import { makeAutoObservable } from 'mobx'
import { SeatType } from '../types/SeatType'
import UserApi from '../http/UserApi'
import { TicketPurchaseRequestType } from '../types/TicketPurchaseRequestType'

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

  public async buyTickets() {
    try {
        const request: TicketPurchaseRequestType = {
            seatIds: this.selectedSeats
        }
        const updatedSeats = await UserApi.purchaseTickets(request)
        
        this.seats = this.seats.map(seat => 
            updatedSeats.some(s => s.id === seat.id) 
                ? {...seat, isBooked: true}
                : seat
        )
        
        this.selectedSeats = []
    } catch (error) {
        console.error("Ошибка покупки:", error)
    }
}

  public toggleSeatSelection = (seatId: number) => {
    const seat = this.seats.find(s => s.id === seatId)
    if (seat?.isBooked) return

    if (this.selectedSeats.includes(seatId)) {
      this.selectedSeats = this.selectedSeats.filter((id) => id !== seatId)
    } else {
      this.selectedSeats.push(seatId)
    }
  }
}
