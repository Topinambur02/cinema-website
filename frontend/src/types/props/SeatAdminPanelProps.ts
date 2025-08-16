import { Dispatch, SetStateAction } from 'react'
import { HallType } from '../HallType'
import { SeatType } from '../SeatType'

export interface SeatAdminPanelProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  isEditModalOpen: boolean
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  selectedSeat: SeatType | null
  setSelectedSeat: Dispatch<SetStateAction<SeatType | null>>
  halls: HallType[]
}
