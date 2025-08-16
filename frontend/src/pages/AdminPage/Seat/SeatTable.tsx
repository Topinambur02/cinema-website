import { JSX, useContext } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import { SeatType } from '../../../types/SeatType'
import ActionButtons from '../ActionButtons'
import SeatApi from '../../../http/SeatApi'
import GenericTable from '../GenericTable'
import { observer } from 'mobx-react-lite'
import { SeatTableProps } from '../../../types/props/SeatTableProps'

const SeatTable = ({ 
  setIsAddModalOpen, 
  setIsEditModalOpen, 
  setSelectedSeat 
}: SeatTableProps): JSX.Element => {
  const { seatStore } = useContext(Context) as StoresType
  const seats = seatStore.getSeats()
  const onEdit = (seat: SeatType) => {
    setSelectedSeat(seat)
    setIsEditModalOpen(true)
  }
  const onDelete = async (seat: SeatType) => {
    await SeatApi.delete(seat.id)
    const updatedSeats = await SeatApi.getAll()
    seatStore.setSeats(updatedSeats)
  }
  const onAdd = () => setIsAddModalOpen(true)

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Номер места', dataIndex: 'seatNumber', key: 'seatNumber' },
    { title: 'ID зала', dataIndex: 'hallId', key: 'hallId' },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: SeatType) => (
        <ActionButtons<SeatType>
          record={record}
          onEdit={onEdit}
          onDelete={onDelete}
          confirmDeleteMessage="Вы уверены, что хотите удалить место?"
        />
      ),
    },
  ]

  return (
    <GenericTable
      dataSource={seats}
      columns={columns}
      onAdd={onAdd}
      addButtonText="Добавить место"
    />
  )
}

export default observer(SeatTable)
