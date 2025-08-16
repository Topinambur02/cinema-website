import { Dispatch, SetStateAction } from 'react'
import { SessionType } from '../SessionType'

export interface SessionTableProps {
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  setSelectedSession: Dispatch<SetStateAction<SessionType | null>>
}
