import { Button, Form, Modal, Upload } from 'antd'
import { JSX, useContext, useEffect } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import ImagesApi from '../../../http/ImagesApi'
import { EditImageModalProps } from '../../../types/props/EditImageModalProps'

const EditImageModal = ({ isEditModalOpen, setIsEditModalOpen, selectedImage }: EditImageModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { imageStore } = useContext(Context) as StoresType
  const images = imageStore.getImages()
  const onCancel = () => setIsEditModalOpen(false)
  const rules = [{ required: true, message: 'Выберите изображение' }]
  const beforeUpload = () => false

  useEffect(() => {
    if (isEditModalOpen && selectedImage) {
      form.setFieldsValue(selectedImage)
    }
  }, [isEditModalOpen, selectedImage])

  const handleEdit = async () => {
    if (!selectedImage) return

    const values = await form.validateFields()

    if (!values.image || values.image.length === 0) {
      return
    }

    const formData = new FormData()
    formData.append('image', values.image[0].originFileObj)
    const updatedImage = await ImagesApi.update(selectedImage.id, formData)
    const updatedImages = images.map(i => (i.id === updatedImage.id ? updatedImage : i))
    imageStore.setImages(updatedImages)
    setIsEditModalOpen(false)
    form.resetFields()
  }

  return (
    <Modal
      title="Редактирование изображения"
      open={isEditModalOpen}
      onOk={handleEdit}
      onCancel={onCancel}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Изображение"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={e => e.fileList}
          rules={rules}
        >
          <Upload accept="image/*" maxCount={1} beforeUpload={beforeUpload}>
            <Button>Выбрать файл</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditImageModal
