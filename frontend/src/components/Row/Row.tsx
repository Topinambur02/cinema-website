import { observer } from 'mobx-react-lite'
import { RowProps } from '../../types/props/RowProps'
import Seat from '../Seat/Seat'
import styles from './Row.module.scss'

const Row = ({ row, rowIndex, selectedSeats, handleSeatClick }: RowProps) => {
  return (
    <div key={rowIndex} className={styles.row}>
      <div className={styles.rowLabel}>{`Ряд ${rowIndex + 1}`}</div>
      <div className={styles.seats}>
        {row.map((seat) => (
          <Seat key={seat.id} seat={seat} selectedSeats={selectedSeats} handleSeatClick={handleSeatClick} />
        ))}
      </div>
    </div>
  )
}

export default observer(Row)
