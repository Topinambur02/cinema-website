import { observer } from 'mobx-react-lite'
import { Column } from '@ant-design/charts'
import { JSX, useContext } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import BackButton from '../BackButton'
import styles from './TicketsChart.module.scss'

const TicketsChart = (): JSX.Element => {
  const { seatStore, sessionStore, movieStore, hallStore } = useContext(Context) as StoresType

  const getChartData = () => {
    const sessions = sessionStore.getSessions()

    const moviesData = sessions.reduce((acc, session) => {
      const movie = movieStore.getMovies().find(m => m.id === session.movieId)
      const hall = hallStore.getHalls().find(h => h.id === session.hallId)

      const soldTickets = seatStore
        .getSeats()
        .filter(seat => seat.hallId === hall?.id && seat.isBooked).length

      const movieName = movie?.name ?? ''

      if (acc[movieName]) {
        acc[movieName] += soldTickets
      } else {
        acc[movieName] = soldTickets
      }

      return acc
    }, {} as Record<string, number>)

    return Object.entries(moviesData).map(([movie, tickets]) => ({
      movie,
      tickets,
    }))
  }

  const config = {
    theme: 'dark',
    data: getChartData(),
    xField: 'movie',
    yField: 'tickets',
    columnWidth: 5,
  }

  return (
    <div className={styles.container}>
      <BackButton />
      <h1>Продажа билетов</h1>
      <Column className={styles.chart} {...config} />
    </div>
  )
}

export default observer(TicketsChart)
