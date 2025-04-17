import { HallType } from "../HallType"
import { SeatType } from "../SeatType"

export interface EditSeatModalProps {
    isEditModalOpen: boolean
    setIsEditModalOpen: (value: boolean) => void
    selectedSeat: SeatType | null
    availableHalls: HallType[]
}