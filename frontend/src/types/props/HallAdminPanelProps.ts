import { Dispatch, SetStateAction } from "react"
import { HallType } from "../HallType"

export interface HallAdminPanelProps {
    isAddModalOpen: boolean
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    isEditModalOpen: boolean
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    selectedHall: HallType | null
    setSelectedHall: Dispatch<SetStateAction<HallType | null>>
}