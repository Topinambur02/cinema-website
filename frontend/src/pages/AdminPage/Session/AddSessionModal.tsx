import { Form, Modal, Select } from "antd"
import { useContext } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import SessionApi from "../../../http/SessionApi"
import { AddSessionModalProps } from "../../../types/props/AddSessionModalProps"

const AddSessionModal = ({ isAddModalOpen, setIsAddModalOpen, availableHalls, availableMovies }: AddSessionModalProps) => {
  const [form] = Form.useForm()
  const { sessionStore } = useContext(Context) as StoresType

  const handleSave = async () => {
    const values = await form.validateFields()
    const newSession = await SessionApi.create(values)
    sessionStore.setSessions([...sessionStore.getSessions(), newSession])
    setIsAddModalOpen(false)
  }

  return (
    <Modal
      title="Добавление сеанса"
      open={isAddModalOpen}
      onOk={handleSave}
      onCancel={() => setIsAddModalOpen(false)}
    >
      <Form layout="vertical" form={form}>

        <Form.Item label="Время начала" name="startTime">
          <input type="datetime-local" style={{ width: '100%' }} onChange={e => form.setFieldsValue({ startTime: e.target.value })} />
        </Form.Item>

        <Form.Item label="Время окончания" name="endTime">
          <input type="datetime-local" style={{ width: '100%' }} onChange={e => form.setFieldsValue({ endTime: e.target.value })} />
        </Form.Item>

        <Form.Item label="ID фильма" name="movieId">
          <Select
            style={{ width: '184px' }}
            showSearch
            placeholder="Выберите фильм"
            optionFilterProp="children"
            options={availableMovies.map(movie => ({
              value: movie.id,
              label: `ID: ${movie.id} (${movie.name || 'Без названия'})`
            }))}
          />
        </Form.Item>

        <Form.Item label="ID зала" name="hallId">
          <Select
            style={{ width: '184px' }}
            showSearch
            placeholder="Выберите зал"
            optionFilterProp="children"
            options={availableHalls.map(hall => ({
              value: hall.id,
              label: `ID: ${hall.id} (${hall.name || 'Без названия'})`
            }))}
          />
        </Form.Item>

      </Form>

    </Modal>
  )
}

export default AddSessionModal