import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout";
import styles from "./TicketsPage.module.scss";
import { useContext, useEffect, useState } from "react";
import SeatApi from "../../http/SeatApi";
import { Context } from "../../App";
import { StoresType } from "../../types/StoresType";
import { observer } from "mobx-react-lite";
import { ChevronLeft } from "lucide-react";
import LoginFormModal from "../../components/LoginFormModal/LoginFormModal";
import { SeatType } from "../../types/SeatType";

const TicketsPage = observer(() => {
    const { id } = useParams<{ id: string }>()
    const { seatStore, userStore } = useContext(Context) as StoresType
    const [showLoginModal, setShowLoginModal] = useState(false)
    const selectedSeats = seatStore.getSelectedSeats()

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

    const seats = seatStore.getSeats()
    const seatsBySession = seats.filter((seat) => seat.sessionId === Number(id))
    const seatsPerRow = 8
    const rows = []
    const navigate = useNavigate()

    for (let i = 0; i < seatsBySession.length; i += seatsPerRow) {
        rows.push(seatsBySession.slice(i, i + seatsPerRow))
    }

    return (
        <Layout>
            {showLoginModal && <LoginFormModal onClose={() => setShowLoginModal(false)} />}

            <div className={styles.pageContent}>
                <ChevronLeft className={styles.backIcon} />
                <button className={styles.back} onClick={() => navigate(-1)}>Назад</button>
            </div>

            <div className={styles.container}>
                <h1>Схема зала</h1>

                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${styles.free}`}></span>
                        <span>Свободно</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${styles.selected}`}></span>
                        <span>Выбрано</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${styles.sold}`}></span>
                        <span>Занято</span>
                    </div>
                </div>

                <div className={styles.hall}>
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className={styles.row}>
                            <div className={styles.rowLabel}>{`Ряд ${rowIndex + 1}`}</div>
                            <div className={styles.seats}>
                                {row.map(seat => (
                                    <div
                                        key={seat.id}
                                        className={`${styles.seat} ${selectedSeats.includes(seat.id)
                                            ? styles.selected
                                            : !seat.isBooked
                                                ? styles.free
                                                : styles.sold
                                            }`}
                                        onClick={() => handleSeatClick(seat)}
                                    >
                                        {seat.seatNumber}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.screenContainer}>
                    <span className={styles.screenText}>Экран</span>
                    <img src="/img/screen.png" alt="screen" className={styles.screen} />
                </div>
            </div>
        </Layout>
    )
})

export default TicketsPage
