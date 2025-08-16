import { ChangeEvent, JSX, useContext, useEffect } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import { Form, Modal, Select } from 'antd'
import SessionApi from '../../../http/SessionApi'
import { EditSessionModalProps } from '../../../types/props/EditSessionModalProps'

const EditSessionModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  selectedSession,
  availableMovies,
  availableHalls,
}: EditSessionModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { sessionStore } = useContext(Context) as StoresType
  const sessions = sessionStore.getSessions()
  const onCancel = () => setIsEditModalOpen(false)
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
    if (isEditModalOpen && selectedSession) {
      form.setFieldsValue(selectedSession)
    }
  }, [isEditModalOpen, selectedSession])

  const handleEdit = async () => {
    if (!selectedSession) return

    const values = await form.validateFields()
    const updatedSession = await SessionApi.update(selectedSession.id, values)
    const updatedSessions = sessions.map((s) => (s.id === updatedSession.id ? updatedSession : s))
    sessionStore.setSessions(updatedSessions)
    setIsEditModalOpen(false)
  }

  return (
    <Modal
      title="Добавление сеанса"
      open={isEditModalOpen}
      onOk={handleEdit}
      onCancel={onCancel}
    >
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
            style={{ width: '100%' }}
            showSearch
            placeholder="Выберите фильм"
            optionFilterProp="children"
            options={optionMovies}
          />
        </Form.Item>

        <Form.Item label="ID зала" name="hallId">
          <Select
            style={{ width: '100%' }}
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

export default EditSessionModal
