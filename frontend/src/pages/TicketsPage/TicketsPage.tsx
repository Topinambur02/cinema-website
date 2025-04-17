import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import styles from './TicketsPage.module.scss'
import { useContext, useEffect, useState } from 'react'
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

const TicketsPage = () => {
  const { id } = useParams<{ id: string }>()
  const { seatStore, userStore } = useContext(Context) as StoresType
  const [showLoginModal, setShowLoginModal] = useState(false)
  const onClose = () => setShowLoginModal(false)
  const selectedSeats = seatStore.getSelectedSeats()
  const seatsPerRow = 8
  const rows = []

  useEffect(() => {
    SeatApi.getAll().then((data) => seatStore.setSeats(data))
  }, [])

  const handleSeatClick = (seat: SeatType) => {
    if (!userStore.isAuth) {
      setShowLoginModal(true)
    } else {
      seatStore.toggleSeatSelection(seat.id)
    }
  }

  const handlePurchase = async () => {
    try {
      await seatStore.buyTickets()
      const updatedSeats = await SeatApi.getAll()
      seatStore.setSeats(updatedSeats)
      alert("Билеты успешно оплачены!")
    } catch (error) {
      if (error instanceof AxiosError) {
        alert("Ошибка при оплате: " + error.message)
      }
    }
  }

  const seats = seatStore.getSeats().slice().sort((a, b) => a.id - b.id)
  const seatsByHall = seats.filter((seat) => seat.hallId === Number(id))

  for (let i = 0; i < seatsByHall.length; i += seatsPerRow) {
    rows.push(seatsByHall.slice(i, i + seatsPerRow))
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
            />
          ))}
        </div>
        <Screen />
      </div>
      <div className={styles.buttonContainer}>
        {selectedSeats.length > 0 && <button onClick={handlePurchase} className={styles.buyButton}>Оплатить</button>}
      </div>
    </Layout>
  )
}

export default observer(TicketsPage)
