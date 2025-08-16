import { useContext } from "react"
import { StoresType } from "../../../types/StoresType"
import { Context } from "../../../App"
import { BookingType } from "../../../types/BookingType"
import BookingApi from "../../../http/BookingApi"
import { BookingTableProps } from "../../../types/props/BookingTableProps"
import ActionButtons from "../ActionButtons"
import GenericTable from "../GenericTable"
import { observer } from "mobx-react-lite"

const BookingTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedBooking
}: BookingTableProps) => {
    const { bookingStore } = useContext(Context) as StoresType
    const bookings = bookingStore.getBookings()
    const onEdit = (booking: BookingType) => {
        setSelectedBooking(booking)
        setIsEditModalOpen(true)
    }
    const onDelete = async (booking: BookingType) => {
        await BookingApi.delete(booking.id)
        const updatedBookings = await BookingApi.getAll()
        bookingStore.setBookings(updatedBookings)
    }
    const onAdd = () => setIsAddModalOpen(true)

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'ID места', dataIndex: 'seatId', key: 'seatId' },
        { title: 'ID сеанса', dataIndex: 'sessionId', key: 'sessionId' },
        { title: 'ID пользователя', dataIndex: 'userId', key: 'userId' },
        {
            title: 'Действия',
            key: 'actions',
            render: (_: any, record: BookingType) => (
                <ActionButtons<BookingType>
                    record={record}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    confirmDeleteMessage="Вы уверены, что хотите удалить бронь?"
                />
            ),
        },
    ]

    return (
        <GenericTable 
            dataSource={bookings}
            columns={columns}
            onAdd={onAdd}
            addButtonText="Добавить бронь"
        />
    )
}

export default observer(BookingTable)