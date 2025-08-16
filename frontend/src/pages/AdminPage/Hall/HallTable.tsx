import { JSX, useContext } from 'react'
import { Context } from '../../../App'
import { HallType } from '../../../types/HallType'
import { StoresType } from '../../../types/StoresType'
import ActionButtons from '../ActionButtons'
import HallApi from '../../../http/HallApi'
import GenericTable from '../GenericTable'
import { observer } from 'mobx-react-lite'
import { HallTableProps } from '../../../types/props/HallTableProps'

const HallTable = ({ setIsAddModalOpen, setIsEditModalOpen, setSelectedHall }: HallTableProps): JSX.Element => {
  const { hallStore } = useContext(Context) as StoresType
  const halls = hallStore.getHalls()
  const onEdit = (hall: HallType) => {
    setSelectedHall(hall)
    setIsEditModalOpen(true)
  }
  const onDelete = async (hall: HallType) => {
    await HallApi.delete(hall.id)
    const updatedHalls = await HallApi.getAll()
    hallStore.setHalls(updatedHalls)
  }
  const onAdd = () => setIsAddModalOpen(true)

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Название', dataIndex: 'name', key: 'name' },
    { title: 'Вместимость', dataIndex: 'capacity', key: 'capacity' },
    { title: 'Цена', dataIndex: 'price', key: 'price' },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: HallType) => (
        <ActionButtons<HallType>
          record={record}
          onEdit={onEdit}
          onDelete={onDelete}
          confirmDeleteMessage="Вы уверены, что хотите удалить зал?"
        />
      ),
    },
  ]

  return (
    <GenericTable
      dataSource={halls}
      columns={columns}
      onAdd={onAdd}
      addButtonText="Добавить зал"
    />
  )
}

export default observer(HallTable)
