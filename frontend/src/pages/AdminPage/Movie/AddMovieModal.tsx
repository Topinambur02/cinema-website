import { Form, Input, Modal, Select } from "antd"
import { AddMovieModalProps } from "../../../types/props/AddMovieModalProps"
import MoviesApi from "../../../http/MoviesApi"
import { StoresType } from "../../../types/StoresType"
import { Context } from "../../../App"
import { useContext } from "react"

const AddMovieModal = ({ isAddModalOpen, setIsAddModalOpen, availableImages, availableGenres }: AddMovieModalProps) => {
    const [form] = Form.useForm()
    const { movieStore } = useContext(Context) as StoresType

    const handleSave = async () => {
        const values = await form.validateFields()
        const newMovie = await MoviesApi.create(values)
        movieStore.setMovies([...movieStore.getMovies(), newMovie])
        setIsAddModalOpen(false)
    }

    return (
        <Modal
            title="Добавление фильма"
            open={isAddModalOpen}
            onOk={handleSave}
            onCancel={() => setIsAddModalOpen(false)}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Название" name="name">
                    <Input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Описание" name="description">
                    <Input.TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Возрастное ограничение" name="ageLimit">
                    <Select style={{ width: '100%' }} options={[
                        { value: '0+', label: '0+' },
                        { value: '6+', label: '6+' },
                        { value: '12+', label: '12+' },
                        { value: '16+', label: '16+' },
                        { value: '18+', label: '18+' }
                    ]} />
                </Form.Item>
                <Form.Item label="ID изображения" name="imageID">
                    <Select
                        showSearch
                        style={{ width: '180px' }}
                        optionFilterProp="children"
                        options={availableImages.map(img => ({
                            value: img.id,
                            label: `ID: ${img.id} (${img.name || 'Без названия'})`
                        }))}
                    />
                </Form.Item>
                <Form.Item
                    label="ID жанров"
                    name="genres_ids"
                >
                    <Select
                        style={{ width: '180px' }}
                        mode="multiple"
                        placeholder="Выберите жанры"
                        options={availableGenres.map(genre => ({
                            value: genre.id,
                            label: genre.name
                        }))}
                    />
                </Form.Item>
            </Form>

        </Modal>
    )
}

export default AddMovieModal