import { Form, Input, Modal, Select } from 'antd'
import { EditMovieModalProps } from '../../../types/props/EditMovieModalProps'
import MoviesApi from '../../../http/MoviesApi'
import { JSX, useContext, useEffect } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import { options } from '../../../constants/options'

const EditMovieModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  selectedMovie,
  availableImages,
  availableGenres,
}: EditMovieModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { movieStore } = useContext(Context) as StoresType
  const movies = movieStore.getMovies()
  const onCancel = () => setIsEditModalOpen(false)
  const optionImages = availableImages.map(img => ({
    value: img.id,
    label: `ID: ${img.id} (${img.name})`,
  }))
  const optionGenres = availableGenres.map(genre => ({
    value: genre.id,
    label: `ID: ${genre.id} (${genre.name})`,
  }))

  useEffect(() => {
    if (isEditModalOpen && selectedMovie) {
      form.setFieldsValue(selectedMovie)
    }
  }, [isEditModalOpen, selectedMovie])

  const handleEdit = async () => {
    if (!selectedMovie) return

    const values = await form.validateFields()
    const updatedMovie = await MoviesApi.update(selectedMovie.id, values)
    const updatedMovies = movies.map(m => (m.id === updatedMovie.id ? updatedMovie : m))

    movieStore.setMovies(updatedMovies)
    setIsEditModalOpen(false)
  }

  return (
    <Modal
      title="Редактирование фильма"
      open={isEditModalOpen}
      onOk={handleEdit}
      onCancel={onCancel}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Название" name="name">
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Описание" name="description">
          <Input.TextArea style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Возрастное ограничение" name="ageLimit">
          <Select
            placeholder="Выберите возрастное ограничение"
            style={{ width: '100%' }}
            options={options}
          />
        </Form.Item>
        <Form.Item label="ID изображения" name="imageID">
          <Select
            style={{ width: '100%' }}
            showSearch
            placeholder="Выберите изображение"
            optionFilterProp="children"
            options={optionImages}
          />
        </Form.Item>
        <Form.Item label="ID жанров" name="genres_ids">
          <Select
            style={{ width: '100%' }}
            mode="multiple"
            placeholder="Выберите жанры"
            options={optionGenres}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditMovieModal
