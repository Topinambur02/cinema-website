import { SeatType } from '../SeatType'

export interface RowProps {
  row: SeatType[]
  rowIndex: number
  selectedSeats: number[]
  handleSeatClick: (seat: SeatType) => void
  idPurchasedSeats: number[]
}
