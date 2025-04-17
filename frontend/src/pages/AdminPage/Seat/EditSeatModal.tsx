import { Form, InputNumber, Modal, Select } from "antd"
import { useContext, useEffect } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import SeatApi from "../../../http/SeatApi"
import { EditSeatModalProps } from "../../../types/props/EditSeatModalProps"

const EditSeatModal = ({ isEditModalOpen, setIsEditModalOpen, selectedSeat, availableHalls }: EditSeatModalProps) => {
    const [form] = Form.useForm()
    const { seatStore } = useContext(Context) as StoresType
    const seats = seatStore.getSeats()

    useEffect(() => {
        if (isEditModalOpen && selectedSeat) {
            form.setFieldsValue(selectedSeat)
        }
    }, [isEditModalOpen, selectedSeat])

    const handleEdit = async () => {
        if (!selectedSeat) return

        const values = await form.validateFields()
        const updatedSeat = await SeatApi.update(selectedSeat.id, values)
        const updatedSeats = seats.map(s =>
            s.id === updatedSeat.id ? updatedSeat : s
        )
        seatStore.setSeats(updatedSeats)
        setIsEditModalOpen(false)
    }

    return (
        <Modal
            title="Редактировать место"
            open={isEditModalOpen}
            onCancel={() => setIsEditModalOpen(false)}
            onOk={handleEdit}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Номер места" name="number">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Забронировано" name="isBooked">
                    <Select style={{ width: '100%' }}>
                        <Select.Option value={false}>Нет</Select.Option>
                        <Select.Option value={true}>Да</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="ID зала" name="hallId">
                    <Select
                        style={{ width: '100%' }}
                        showSearch
                        placeholder="Выберите зал"
                        optionFilterProp="children"
                        options={availableHalls.map(hall => ({
                            value: hall.id,
                            label: `ID: ${hall.id} (${hall.name || 'Без названия'})`
                        }))}
                    />
                </Form.Item>
                <Form.Item label="ID пользователя" name={"userId"}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Цена" name="price">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditSeatModal