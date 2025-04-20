import { Armchair } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Session.module.scss'
import formatTime from '../../utils/FormatTime'
import { SessionProps } from '../../types/props/SessionProps'
import { JSX } from 'react'

const Session = ({ sessionWithHall, movie }: SessionProps): JSX.Element => {
  return (
    <Link
      to={'/sessions/' + sessionWithHall.hallId + '/tickets/' + sessionWithHall.id}
      key={sessionWithHall.id}
      className={styles.sessionItem}
    >
      <div className={styles.head}>
        <div className={styles.infoLine}>
          <div className={styles.period}>
            {formatTime(sessionWithHall.startTime)} - {formatTime(sessionWithHall.endTime)}
          </div>
          <div className={styles.format}>2D</div>
        </div>
        <div className={styles.age}>{movie.ageLimit}</div>
      </div>
      <div className={styles.title}>{movie.name}</div>
      <div className={styles.hallWrapper}>
        <div className={styles.name}>{sessionWithHall.hall?.name}</div>
        <div className={styles.place}>
          {' '}
          <Armchair /> {sessionWithHall.hall?.price}₽
        </div>
      </div>
    </Link>
  )
}

export default Session
