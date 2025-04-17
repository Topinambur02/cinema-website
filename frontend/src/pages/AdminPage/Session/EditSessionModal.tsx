import { useContext, useEffect } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import { Form, Modal, Select } from "antd"
import SessionApi from "../../../http/SessionApi"
import { EditSessionModalProps } from "../../../types/props/EditSessionModalProps"

const EditSessionModal = ({ isEditModalOpen, setIsEditModalOpen, selectedSession, availableMovies, availableHalls }: EditSessionModalProps) => {
  const [form] = Form.useForm()
  const { sessionStore } = useContext(Context) as StoresType
  const sessions = sessionStore.getSessions()

  useEffect(() => {
    if (isEditModalOpen && selectedSession) {
      form.setFieldsValue(selectedSession)
    }
  }, [isEditModalOpen, selectedSession])

  const handleEdit = async () => {
    if (!selectedSession) return

    const values = await form.validateFields()
    const updatedSession = await SessionApi.update(selectedSession.id, values)
    const updatedSessions = sessions.map(s =>
      s.id === updatedSession.id ? updatedSession : s
    )
    sessionStore.setSessions(updatedSessions)
    setIsEditModalOpen(false)
  }

  return (
    <Modal
      title="Добавление сеанса"
      open={isEditModalOpen}
      onOk={handleEdit}
      onCancel={() => setIsEditModalOpen(false)}
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
            style={{ width: '100%' }}
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
            style={{ width: '100%' }}
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

export default EditSessionModal