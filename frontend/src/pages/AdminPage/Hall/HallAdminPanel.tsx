import AddHallModal from './AddHallModal'
import EditHallModal from './EditHallModal'
import HallTable from './HallTable'
import { HallAdminPanelProps } from '../../../types/props/HallAdminPanelProps'
import { JSX } from 'react'

const HallAdminPanel = ({
  isAddModalOpen,
  setIsAddModalOpen,
  isEditModalOpen,
  setIsEditModalOpen,
  selectedHall,
  setSelectedHall,
}: HallAdminPanelProps): JSX.Element => {
  return (
    <>
      <HallTable
        setIsAddModalOpen={setIsAddModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setSelectedHall={setSelectedHall}
      />

      <EditHallModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        selectedHall={selectedHall}
      />

      <AddHallModal
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
      />
    </>
  )
}

export default HallAdminPanel
