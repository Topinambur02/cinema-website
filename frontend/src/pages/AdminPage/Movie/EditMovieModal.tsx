import { Form, Input, Modal, Select } from "antd"
import { EditMovieModalProps } from "../../../types/props/EditMovieModalProps"
import MoviesApi from "../../../http/MoviesApi"
import { useContext, useEffect } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"

const EditMovieModal = ({ isEditModalOpen, setIsEditModalOpen, selectedMovie, availableImages, availableGenres }: EditMovieModalProps) => {
    const [form] = Form.useForm()
    const { movieStore } = useContext(Context) as StoresType
    const movies = movieStore.getMovies()

    useEffect(() => {
        if (isEditModalOpen && selectedMovie) {
            form.setFieldsValue(selectedMovie)
        }
    }, [isEditModalOpen, selectedMovie])

    const handleEdit = async () => {
        if (!selectedMovie) return

        const values = await form.validateFields()
        const updatedMovie = await MoviesApi.update(selectedMovie.id, values)
        const updatedMovies = movies.map(m =>
            m.id === updatedMovie.id ? updatedMovie : m
        )
        movieStore.setMovies(updatedMovies)
        setIsEditModalOpen(false)
    }

    return (
        <Modal
            title="Редактирование фильма"
            open={isEditModalOpen}
            onOk={handleEdit}
            onCancel={() => setIsEditModalOpen(false)}
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="Название" name="name">
                    <Input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Описание" name="description">
                    <Input.TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Возрастное ограничение" name="ageLimit">
                    <Select placeholder="Выберите возрастное ограничение" style={{ width: '100%' }} options={[
                        { value: '0+', label: '0+' },
                        { value: '6+', label: '6+' },
                        { value: '12+', label: '12+' },
                        { value: '16+', label: '16+' },
                        { value: '18+', label: '18+' }
                    ]} />
                </Form.Item>
                <Form.Item label="ID изображения" name="imageID">
                    <Select
                        style={{ width: '100%' }}
                        showSearch
                        placeholder="Выберите изображение"
                        optionFilterProp="children"
                        options={availableImages.map(img => ({
                            value: img.id,
                            label: `ID: ${img.id} (${img.name || 'Без названия'})`
                        }))}
                    />
                </Form.Item>
                <Form.Item label="ID жанров" name="genres_ids">
                    <Select
                        style={{ width: '100%' }}
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

export default EditMovieModal