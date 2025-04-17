import { HallType } from "../HallType"

export interface AddSeatModalProps {
    isAddModalOpen: boolean
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    availableHalls: HallType[]
}