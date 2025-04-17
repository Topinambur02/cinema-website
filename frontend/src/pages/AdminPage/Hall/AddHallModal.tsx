import { Form, Input, InputNumber, Modal } from "antd"
import HallApi from "../../../http/HallApi"
import { useContext } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import { AddHallModalProps } from "../../../types/props/AddHallModalProps"

const AddHallModal = ({ isAddModalOpen, setIsAddModalOpen }: AddHallModalProps) => {
    const [form] = Form.useForm()
    const { hallStore } = useContext(Context) as StoresType

    const handleSave = async () => {
        const values = await form.validateFields()
        const newHall = await HallApi.create(values)
        hallStore.setHalls([...hallStore.getHalls(), newHall])
        setIsAddModalOpen(false)
    }

    return (
        <Modal
            title="Добавление залов"
            open={isAddModalOpen}
            onOk={handleSave}
            onCancel={() => setIsAddModalOpen(false)}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Название" name="name">
                    <Input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Вместимость" name="capacity">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Цена" name="price">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
            </Form>

        </Modal>
    )
}

export default AddHallModal