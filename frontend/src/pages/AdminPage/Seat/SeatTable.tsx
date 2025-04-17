import { useContext } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import { SeatType } from "../../../types/SeatType"
import ActionButtons from "../ActionButtons"
import SeatApi from "../../../http/SeatApi"
import GenericTable from "../GenericTable"
import { observer } from "mobx-react-lite"
import { SeatTableProps } from "../../../types/props/SeatTableProps"

const SeatTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedSeat,
}: SeatTableProps) => {

    const { seatStore } = useContext(Context) as StoresType
    const seats = seatStore.getSeats()

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Номер места", dataIndex: "seatNumber", key: "seatNumber" },
        { title: "ID зала", dataIndex: "hallId", key: "hallId" },
        { title: "Забронировано", dataIndex: "isBooked", key: "isBooked", render: (isBooked: boolean) => isBooked ? "Да" : "Нет" },
        { title: "ID пользователя", dataIndex: "userId", key: "userId", render: (userId: number | null) => userId ?? "—" },
        {
            title: "Действия",
            key: "actions",
            render: (_: any, record: SeatType) => (
                <ActionButtons<SeatType>
                    record={record}
                    onEdit={seat => {
                        setSelectedSeat(seat)
                        setIsEditModalOpen(true)
                    }}
                    onDelete={async (seat) => {
                        await SeatApi.delete(seat.id)
                        const updatedSeats = await SeatApi.getAll()
                        seatStore.setSeats(updatedSeats)
                    }}
                    confirmDeleteMessage="Вы уверены, что хотите удалить место?"
                />
            ),
        }
    ]

    return (
        <GenericTable
            dataSource={seats}
            columns={columns}
            onAdd={() => setIsAddModalOpen(true)}
            addButtonText="Добавить место"
        />
    )
}

export default observer(SeatTable)