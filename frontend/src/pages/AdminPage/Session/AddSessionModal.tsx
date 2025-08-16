import { Form, Modal, Select } from 'antd'
import { ChangeEvent, JSX, useContext, useEffect } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import SessionApi from '../../../http/SessionApi'
import { AddSessionModalProps } from '../../../types/props/AddSessionModalProps'

const AddSessionModal = ({
  isAddModalOpen,
  setIsAddModalOpen,
  availableHalls,
  availableMovies,
}: AddSessionModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { sessionStore } = useContext(Context) as StoresType
  const onCancel = () => setIsAddModalOpen(false)
  const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => form.setFieldsValue({ startTime: e.target.value })
  const onChangeEnd = (e: ChangeEvent<HTMLInputElement>) => form.setFieldsValue({ endTime: e.target.value })
  const optionMovies = availableMovies.map(movie => ({
    value: movie.id,
    label: `ID: ${movie.id} (${movie.name})`,
  }))
  const optionHalls = availableHalls.map(hall => ({
    value: hall.id,
    label: `ID: ${hall.id} (${hall.name})`,
  }))

  useEffect(() => {
      if (isAddModalOpen) {
        form.resetFields()
      }
    }, [isAddModalOpen, form])

  const handleSave = async () => {
    const values = await form.validateFields()
    const newSession = await SessionApi.create(values)
    sessionStore.setSessions([...sessionStore.getSessions(), newSession])
    setIsAddModalOpen(false)
  }

  return (
    <Modal title="Добавление сеанса" open={isAddModalOpen} onOk={handleSave} onCancel={onCancel}>
      <Form layout="vertical" form={form}>
        <Form.Item label="Время начала" name="startTime">
          <input
            type="datetime-local"
            style={{ width: '100%' }}
            onChange={onChangeStart}
          />
        </Form.Item>

        <Form.Item label="Время окончания" name="endTime">
          <input
            type="datetime-local"
            style={{ width: '100%' }}
            onChange={onChangeEnd}
          />
        </Form.Item>

        <Form.Item label="ID фильма" name="movieId">
          <Select
            style={{ width: '184px' }}
            showSearch
            placeholder="Выберите фильм"
            optionFilterProp="children"
            options={optionMovies}
          />
        </Form.Item>

        <Form.Item label="ID зала" name="hallId">
          <Select
            style={{ width: '184px' }}
            showSearch
            placeholder="Выберите зал"
            optionFilterProp="children"
            options={optionHalls}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddSessionModal
