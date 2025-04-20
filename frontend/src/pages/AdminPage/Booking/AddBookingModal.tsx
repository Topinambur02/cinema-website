import { Form, Modal, Select } from "antd"
import { JSX, useContext, useEffect } from "react"
import { Context } from "../../../App"
import { AddBookingModalProps } from "../../../types/props/AddBookingModalProps"
import { StoresType } from "../../../types/StoresType"
import BookingApi from "../../../http/BookingApi"

const AddBookingModal = ({ isAddModalOpen, setIsAddModalOpen, availableSeats, availableSessions }: AddBookingModalProps): JSX.Element => {
    const [form] = Form.useForm()
    const { bookingStore } = useContext(Context) as StoresType
    const onCancel = () => setIsAddModalOpen(false)
    const optionSeats = availableSeats.map(seat => ({
        value: seat.id,
        label: `ID: ${seat.id} (${seat.seatNumber})`,
    }))
    const optionSessions = availableSessions.map(session => ({
        value: session.id,
        label: `ID: ${session.id} (${session.startTime} - ${session.endTime})`,
    }))

    useEffect(() => {
        if (isAddModalOpen) {
            form.resetFields()
        }
    }, [isAddModalOpen, form])

    const handleSave = async () => {
        const values = await form.validateFields()
        const newBooking = await BookingApi.create(values)
        const updatedBookings = bookingStore.getBookings().concat(newBooking)
        bookingStore.setBookings(updatedBookings)
        setIsAddModalOpen(false)
    }

    return (
        <Modal
            title="Добавление бронирования"
            open={isAddModalOpen}
            onOk={handleSave}
            onCancel={onCancel}
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

export default AddBookingModal