import { Form, Input, Modal } from "antd"
import { useContext, useEffect } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import GenresApi from "../../../http/GenresApi"
import { EditGenreModalProps } from "../../../types/props/EditGenreModalProps"

const EditGenreModal = ({ isEditModalOpen, setIsEditModalOpen, selectedGenre }: EditGenreModalProps) => {
    const [form] = Form.useForm()
    const { genreStore } = useContext(Context) as StoresType
    const genres = genreStore.getGenres()

    useEffect(() => {
        if (isEditModalOpen && selectedGenre) {
            form.setFieldsValue(selectedGenre)
        }
    }, [isEditModalOpen, selectedGenre])

    const handleEdit = async () => {
        if (!selectedGenre) return

        const values = await form.validateFields()
        const updatedGenre = await GenresApi.update(selectedGenre.id, values)
        const updatedGenres = genres.map(g =>
            g.id === updatedGenre.id ? updatedGenre : g
        )
        genreStore.setGenres(updatedGenres)
        setIsEditModalOpen(false)
    }

    return (
        <Modal
            title="Редактирование жанра"
            open={isEditModalOpen}
            onOk={handleEdit}
            onCancel={() => setIsEditModalOpen(false)}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Название" name="name">
                    <Input />
                </Form.Item>
            </Form>

        </Modal>
    )
}

export default EditGenreModal