import { SeatType } from '../SeatType'

export interface SeatProps {
  seat: SeatType
  selectedSeats: number[]
  handleSeatClick: (seat: SeatType) => void
  idPurchasedSeats: number[]
}
