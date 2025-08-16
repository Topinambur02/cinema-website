import { Dispatch, SetStateAction } from 'react'
import { HallType } from '../HallType'

export interface HallTableProps {
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  setSelectedHall: Dispatch<SetStateAction<HallType | null>>
}
