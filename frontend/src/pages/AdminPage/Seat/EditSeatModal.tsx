import { Form, InputNumber, Modal, Select } from 'antd'
import { JSX, useContext, useEffect } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import SeatApi from '../../../http/SeatApi'
import { EditSeatModalProps } from '../../../types/props/EditSeatModalProps'

const EditSeatModal = ({ 
  isEditModalOpen, 
  setIsEditModalOpen, 
  selectedSeat, 
  availableHalls 
}: EditSeatModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { seatStore } = useContext(Context) as StoresType
  const seats = seatStore.getSeats()
  const onCancel = () => setIsEditModalOpen(false)
  const optionHalls = availableHalls.map(hall => ({
    value: hall.id,
    label: `ID: ${hall.id} (${hall.name})`,
  }))

  useEffect(() => {
    if (isEditModalOpen && selectedSeat) {
      form.setFieldsValue(selectedSeat)
    }
  }, [isEditModalOpen, selectedSeat])

  const handleEdit = async () => {
    if (!selectedSeat) return

    const values = await form.validateFields()
    const updatedSeat = await SeatApi.update(selectedSeat.id, values)
    const updatedSeats = seats.map(s => (s.id === updatedSeat.id ? updatedSeat : s))
    seatStore.setSeats(updatedSeats)
    setIsEditModalOpen(false)
  }

  return (
    <Modal
      title="Редактировать место"
      open={isEditModalOpen}
      onCancel={onCancel}
      onOk={handleEdit}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Номер места" name="number">
          <InputNumber style={{ width: '100%' }} />
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

export default EditSeatModal
