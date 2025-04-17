import AddSessionModal from './AddSessionModal'
import EditSessionModal from './EditSessionModal'
import SessionTable from './SessionTable'
import { SessionAdminPanelProps } from '../../../types/props/SessionAdminPanelProps'
import { JSX } from 'react'

const SessionAdminPanel = ({
  isAddModalOpen,
  setIsAddModalOpen,
  isEditModalOpen,
  setIsEditModalOpen,
  selectedSession,
  setSelectedSession,
  halls,
  movies,
}: SessionAdminPanelProps): JSX.Element => {
  return (
    <>
      <SessionTable
        setIsAddModalOpen={setIsAddModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setSelectedSession={setSelectedSession}
      />

      <EditSessionModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        selectedSession={selectedSession}
        availableHalls={halls}
        availableMovies={movies}
      />

      <AddSessionModal
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        availableHalls={halls}
        availableMovies={movies}
      />
    </>
  )
}

export default SessionAdminPanel
