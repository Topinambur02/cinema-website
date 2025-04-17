import { HallType } from "../HallType"

export interface EditHallModalProps {
    isEditModalOpen: boolean
    setIsEditModalOpen: (value: boolean) => void
    selectedHall: HallType | null
}