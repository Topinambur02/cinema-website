import { Button, Form, Modal, Upload } from 'antd'
import { JSX, useContext } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import ImagesApi from '../../../http/ImagesApi'
import { AddImageModalProps } from '../../../types/props/AddImageModalProps'

const AddImageModal = ({ isAddModalOpen, setIsAddModalOpen }: AddImageModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { imageStore } = useContext(Context) as StoresType
  const onCancel = () => setIsAddModalOpen(false)
  const rules = [{ required: true, message: 'Выберите изображение' }]
  const beforeUpload = () => false

  const handleSave = async () => {
    const values = await form.validateFields()

    if (!values.image || values.image.length === 0) {
      return
    }

    const formData = new FormData()
    formData.append('image', values.image[0].originFileObj)

    const newImage = await ImagesApi.create(formData)
    imageStore.setImages([...imageStore.getImages(), newImage])

    setIsAddModalOpen(false)
    form.resetFields()
  }

  return (
    <Modal
      title="Добавление изображения"
      open={isAddModalOpen}
      onOk={handleSave}
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

export default AddImageModal
