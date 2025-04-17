import { Form, Input, Modal } from "antd"
import { useContext } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import GenresApi from "../../../http/GenresApi"
import { AddGenreModalProps } from "../../../types/props/AddGenreModalProps"

const AddGenreModal = ({ isAddModalOpen, setIsAddModalOpen }: AddGenreModalProps) => {
    const [form] = Form.useForm()
    const { genreStore } = useContext(Context) as StoresType

    const handleSave = async () => {
        const values = await form.validateFields()
        const newGenre = await GenresApi.create(values)
        genreStore.setGenres([...genreStore.getGenres(), newGenre])
        setIsAddModalOpen(false)
    }

    return (
        <Modal
            title="Добавление жанра"
            open={isAddModalOpen}
            onOk={handleSave}
            onCancel={() => setIsAddModalOpen(false)}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Название" name="name">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddGenreModal