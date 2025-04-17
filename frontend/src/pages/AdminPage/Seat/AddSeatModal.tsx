import { Form, InputNumber, Modal, Select } from "antd"
import { useContext } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import SeatApi from "../../../http/SeatApi"
import { AddSeatModalProps } from "../../../types/props/AddSeatModalProps"

const AddSeatModal = ({ isAddModalOpen, setIsAddModalOpen, availableHalls }: AddSeatModalProps) => {
    const [form] = Form.useForm()
    const { seatStore } = useContext(Context) as StoresType

    const handleSave = async () => {
        const values = await form.validateFields()
        const newSeat = await SeatApi.create(values)
        seatStore.setSeats([...seatStore.getSeats(), newSeat])
        setIsAddModalOpen(false)
    }

    return (
        <Modal
            title="Добавление мест"
            open={isAddModalOpen}
            onOk={handleSave}
            onCancel={() => setIsAddModalOpen(false)}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="ID зала" name="hallId">
                    <Select
                        style={{ width: '180px' }}
                        showSearch
                        placeholder="Выберите зал"
                        optionFilterProp="children"
                        options={availableHalls.map(hall => ({
                            value: hall.id,
                            label: `ID: ${hall.id} (${hall.name ?? 'Без названия'})`
                        }))}
                    />
                </Form.Item>
                <Form.Item label="Номер места" name="number">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddSeatModal