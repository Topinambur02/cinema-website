import { observer } from 'mobx-react-lite'
import { SeatProps } from '../../types/props/SeatProps'
import styles from './Seat.module.scss'

const Seat = ({ seat, selectedSeats, handleSeatClick, idPurchasedSeats }: SeatProps) => {
  const isPurchased = idPurchasedSeats.includes(seat.id)

  return (
    <div
      key={seat.id}
      className={`${styles.seat} ${selectedSeats.includes(seat.id) ? styles.selected : isPurchased ? styles.sold : styles.free}`}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.seatNumber}
    </div>
  )
}

export default observer(Seat)
