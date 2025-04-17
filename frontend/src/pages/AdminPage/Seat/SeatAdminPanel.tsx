import AddSeatModal from './AddSeatModal'
import EditSeatModal from './EditSeatModal'
import SeatTable from './SeatTable'
import { SeatAdminPanelProps } from '../../../types/props/SeatAdminPanelProps'
import { JSX } from 'react'

const SeatAdminPanel = ({
  isAddModalOpen,
  setIsAddModalOpen,
  isEditModalOpen,
  setIsEditModalOpen,
  selectedSeat,
  setSelectedSeat,
  halls,
}: SeatAdminPanelProps): JSX.Element => {
  return (
    <>
      <SeatTable
        setIsAddModalOpen={setIsAddModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setSelectedSeat={setSelectedSeat}
      />

      <EditSeatModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        selectedSeat={selectedSeat}
        availableHalls={halls}
      />

      <AddSeatModal
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        availableHalls={halls}
      />
    </>
  )
}

export default SeatAdminPanel
