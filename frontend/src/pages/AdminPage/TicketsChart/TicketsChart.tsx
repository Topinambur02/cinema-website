import { observer } from "mobx-react-lite"
import { Column } from '@ant-design/charts';
import { useContext } from "react";
import { Context } from "../../../App";
import { StoresType } from "../../../types/StoresType";
import BackButton from "../BackButton";
import styles from './TicketsChart.module.scss'

const TicketsChart = () => {
    const { seatStore, sessionStore, movieStore, hallStore } = useContext(Context) as StoresType

    const getChartData = () => {
        return sessionStore.getSessions().map(session => {
            const hall = hallStore.getHalls().find(h => h.id === session.hallId)

            const soldTickets = seatStore.getSeats().filter(
                seat => seat.hallId === hall?.id && seat.isBooked === true
            ).length

            const movie = movieStore.getMovies().find(m => m.id === session.movieId)
            const time = new Date(session.endTime).getTime() - new Date(session.startTime).getTime()

            return {
                session: `Сеанс #${session.id}`,
                movie: movie?.name,
                time: time,
                tickets: soldTickets,
            }
        })
    }

    const config = {
        theme: "dark",
        data: getChartData(),
        xField: 'movie',
        yField: 'tickets',
        isGroup: true,
        label: {
            style: { fill: '#FFF' },
        },
        tooltip: {
            fields: ['movie', 'time', 'tickets'],
        },
        xAxis: { title: { text: 'Фильмы' } },
        yAxis: { title: { text: 'Проданные билеты' } },
    };

    return (
        <div className={styles.container}>
            <BackButton />
            <Column title={"Проданные билеты"} {...config} />
        </div>
    )
}

export default observer(TicketsChart)