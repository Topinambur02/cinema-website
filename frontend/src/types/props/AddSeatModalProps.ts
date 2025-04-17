import { Dispatch, SetStateAction } from 'react'
import { HallType } from '../HallType'

export interface AddSeatModalProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  availableHalls: HallType[]
}
