import { observer } from 'mobx-react-lite'
import { SeatProps } from '../../types/props/SeatProps'
import styles from './Seat.module.scss'

const Seat = ({ seat, selectedSeats, handleSeatClick }: SeatProps) => {
  return (
    <div
      key={seat.id}
      className={`${styles.seat} ${selectedSeats.includes(seat.id) ? styles.selected : !seat.isBooked ? styles.free : styles.sold}`}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.seatNumber}
    </div>
  )
}

export default observer(Seat)
