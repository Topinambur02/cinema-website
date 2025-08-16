import { Form, Modal, Select } from "antd"
import { EditBookingModalProps } from "../../../types/props/EditBookingModalProps"
import { useContext, useEffect } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import BookingApi from "../../../http/BookingApi"

const EditBookingModal = ({
    isEditModalOpen,
    setIsEditModalOpen,
    selectedBooking,
    availableSeats,
    availableSessions
}: EditBookingModalProps) => {
    const [form] = Form.useForm()
    const { bookingStore } = useContext(Context) as StoresType
    const seats = bookingStore.getBookings()
    const onCancel = () => setIsEditModalOpen(false)
    const optionSeats = availableSeats.map(seat => ({
        value: seat.id,
        label: `ID: ${seat.id} (${seat.seatNumber})`,
    }))
    const optionSessions = availableSessions.map(session => ({
        value: session.id,
        label: `ID: ${session.id} (${session.startTime} - ${session.endTime})`,
    }))

    useEffect(() => {
        if (isEditModalOpen && selectedBooking) {
            form.setFieldsValue(selectedBooking)
        }
    }, [isEditModalOpen, selectedBooking])

    const handleEdit = async () => {
        if (!selectedBooking) return

        const values = await form.validateFields()
        const updatedSeat = await BookingApi.update(selectedBooking.id, values)
        const updatedSeats = seats.map(s => (s.id === updatedSeat.id ? updatedSeat : s))
        bookingStore.setBookings(updatedSeats)
        setIsEditModalOpen(false)
    }

    return (
        <Modal
            title="Редактировать бронирование"
            open={isEditModalOpen}
            onCancel={onCancel}
            onOk={handleEdit}
        >
            <Form layout="vertical" form={form}>
            <Form.Item label="seatId" name="seatId">
                    <Select
                        showSearch
                        placeholder="Выберите место"
                        optionFilterProp="children"
                        options={optionSeats}
                    />
                </Form.Item>
                <Form.Item label="sessionId" name="sessionId">
                    <Select
                        showSearch
                        placeholder="Выберите сеанс"
                        optionFilterProp="children"
                        options={optionSessions}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditBookingModal