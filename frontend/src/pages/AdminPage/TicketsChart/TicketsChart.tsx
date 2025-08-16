import { observer } from 'mobx-react-lite'
import { Column } from '@ant-design/charts'
import { JSX, useEffect, useState } from 'react'
import BackButton from '../BackButton'
import styles from './TicketsChart.module.scss'
import BookingApi from '../../../http/BookingApi'
import { TicketsSold } from '../../../types/TicketsSold'

const TicketsChart = (): JSX.Element => {
  const [data, setData] = useState<TicketsSold[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await BookingApi.get_tickets_sold()

      const formattedData = data.map(item => {
        return {
          name: item[0],
          tickets_sold: item[1],
        }
      })

      setData(formattedData)

    }

    fetchData()
  }, [])

  console.log(data)

  const config = {
    theme: 'dark',
    data: data,
    xField: 'name',
    yField: 'tickets_sold',
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
