import { useContext, useEffect } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import { Form, Input, InputNumber, Modal } from "antd"
import HallApi from "../../../http/HallApi"
import { EditHallModalProps } from "../../../types/props/EditHallModalProps"

const EditHallModal = ({ isEditModalOpen, setIsEditModalOpen, selectedHall }: EditHallModalProps) => {
    const [form] = Form.useForm()
    const { hallStore } = useContext(Context) as StoresType
    const halls = hallStore.getHalls()

    useEffect(() => {
        if (isEditModalOpen && selectedHall) {
            form.setFieldsValue(selectedHall)
        }
    }, [isEditModalOpen, selectedHall])

    const handleEdit = async () => {
        if (!selectedHall) return

        const values = await form.validateFields()
        const updatedHall = await HallApi.update(selectedHall.id, values)
        const updatedHalls = halls.map(h =>
            h.id === updatedHall.id ? updatedHall : h
        )
        hallStore.setHalls(updatedHalls)
        setIsEditModalOpen(false)
    }

    return (
        <Modal
            title="Редактирование зала"
            open={isEditModalOpen}
            onOk={handleEdit}
            onCancel={() => setIsEditModalOpen(false)}
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

export default EditHallModal