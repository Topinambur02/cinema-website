import { Form, Input, Modal, Select } from 'antd'
import { AddMovieModalProps } from '../../../types/props/AddMovieModalProps'
import MoviesApi from '../../../http/MoviesApi'
import { StoresType } from '../../../types/StoresType'
import { Context } from '../../../App'
import { JSX, useContext, useEffect } from 'react'
import { options } from '../../../constants/options'

const AddMovieModal = ({
  isAddModalOpen,
  setIsAddModalOpen,
  availableImages,
  availableGenres
}: AddMovieModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { movieStore } = useContext(Context) as StoresType
  const onCancel = () => setIsAddModalOpen(false)
  const optionImages = availableImages.map(img => ({
    value: img.id,
    label: `ID: ${img.id} (${img.name})`,
  }))
  const optionGenres = availableGenres.map(genre => ({
    value: genre.id,
    label: `ID: ${genre.id} (${genre.name})`,
  }))

  useEffect(() => {
    if (isAddModalOpen) {
      form.resetFields()
    }
  }, [isAddModalOpen, form])

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
            style={{ width: '100%' }}
            options={options}
          />
        </Form.Item>
        <Form.Item label="ID изображения" name="imageID">
          <Select
            showSearch
            style={{ width: '180px' }}
            optionFilterProp="children"
            options={optionImages}
          />
        </Form.Item>
        <Form.Item label="ID жанров" name="genres_ids">
          <Select
            style={{ width: '180px' }}
            mode="multiple"
            placeholder="Выберите жанры"
            options={optionGenres}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddMovieModal
