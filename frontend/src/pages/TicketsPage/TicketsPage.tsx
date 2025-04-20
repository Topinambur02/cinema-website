import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import styles from './TicketsPage.module.scss'
import { JSX, useContext, useEffect, useState } from 'react'
import SeatApi from '../../http/SeatApi'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import { observer } from 'mobx-react-lite'
import LoginFormModal from '../../components/LoginFormModal/LoginFormModal'
import { SeatType } from '../../types/SeatType'
import Screen from '../../components/Screen/Screen'
import Legend from '../../components/Legend/Legend'
import BackButton from '../../components/BackButton/BackButton'
import Row from '../../components/Row/Row'
import { AxiosError } from 'axios'
import BookingApi from '../../http/BookingApi'

const TicketsPage = (): JSX.Element => {
  const { hall_id } = useParams<{ hall_id: string }>()
  const { session_id } = useParams<{ session_id: string }>()
  const { seatStore, userStore, bookingStore } = useContext(Context) as StoresType
  const [showLoginModal, setShowLoginModal] = useState(false)
  const onClose = () => setShowLoginModal(false)
  const seatsPerRow = 8
  const selectedSeats = bookingStore.getSelectedSeats()
  const rows = []

  useEffect(() => {
    const fetchData = async () => {
      const [seats, bookings] = await Promise.all([
        SeatApi.getAll(),
        BookingApi.getAll()
      ])
      seatStore.setSeats(seats)
      bookingStore.setBookings(bookings)
    }

    fetchData()
  }, [])

  const idPurchasedSeats = bookingStore.getBookings()
    .filter(booking => booking.sessionId === Number(session_id))
    .map(booking => booking.seatId)

  const handleSeatClick = (seat: SeatType) => {
    if (idPurchasedSeats.includes(seat.id)) {
      return
    }

    if (!userStore.isAuth) {
      setShowLoginModal(true)
    }

    else {
      const currentSelected = bookingStore.getSelectedSeats()
      const isSelected = currentSelected.includes(seat.id)

      if (isSelected) {
        bookingStore.setSelectedSeats(currentSelected.filter(id => id !== seat.id))
      } else {
        bookingStore.setSelectedSeats([...currentSelected, seat.id])
      }
    }
  }

  const handlePurchase = async () => {
    try {
      const dtos = selectedSeats.map(seatId => ({ seatId, sessionId: Number(session_id) }))
      const newBookings = await BookingApi.create(dtos)
      bookingStore.setBookings([...bookingStore.getBookings(), ...newBookings])
      bookingStore.setSelectedSeats([])
      alert('Билеты успешно оплачены!')
    } catch (error) {
      if (error instanceof AxiosError) {
        alert('Ошибка при оплате: ' + error.message)
      }
    }
  }

  const seats = seatStore
    .getSeats()
    .slice()
    .sort((a, b) => a.id - b.id)
  const seatsByHall = seats.filter(seat => seat.hallId === Number(hall_id))

  for (let i = 0; i < seatsByHall.length; i += seatsPerRow) {
    const row = seatsByHall.slice(i, i + seatsPerRow)
    rows.push(row)
  }

  return (
    <Layout>
      {showLoginModal && <LoginFormModal onClose={onClose} />}
      <BackButton />
      <div className={styles.container}>
        <h1>Схема зала</h1>
        <Legend />
        <div className={styles.hall}>
          {rows.map((row, rowIndex) => (
            <Row
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              selectedSeats={selectedSeats}
              handleSeatClick={handleSeatClick}
              idPurchasedSeats={idPurchasedSeats}
            />
          ))}
        </div>
        <Screen />
      </div>
      <div className={styles.buttonContainer}>
        {selectedSeats.length > 0 && (
          <button onClick={handlePurchase} className={styles.buyButton}>
            Оплатить
          </button>
        )}
      </div>
    </Layout>
  )
}

export default observer(TicketsPage)
