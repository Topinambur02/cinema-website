import { Form, InputNumber, Modal, Select } from 'antd'
import { JSX, useContext } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import SeatApi from '../../../http/SeatApi'
import { AddSeatModalProps } from '../../../types/props/AddSeatModalProps'

const AddSeatModal = ({
  isAddModalOpen,
  setIsAddModalOpen,
  availableHalls
}: AddSeatModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { seatStore } = useContext(Context) as StoresType
  const onCancel = () => setIsAddModalOpen(false)
  const optionHalls = availableHalls.map((hall) => ({
    value: hall.id,
    label: `ID: ${hall.id} (${hall.name})`,
  }))

  const handleSave = async () => {
    const values = await form.validateFields()
    const newSeat = await SeatApi.create(values)
    seatStore.setSeats([...seatStore.getSeats(), newSeat])
    setIsAddModalOpen(false)
  }

  return (
    <Modal
      title="Добавление мест"
      open={isAddModalOpen}
      onOk={handleSave}
      onCancel={onCancel}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="ID зала" name="hallId">
          <Select
            style={{ width: '180px' }}
            showSearch
            placeholder="Выберите зал"
            optionFilterProp="children"
            options={optionHalls}
          />
        </Form.Item>
        <Form.Item label="Номер места" name="number">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddSeatModal
