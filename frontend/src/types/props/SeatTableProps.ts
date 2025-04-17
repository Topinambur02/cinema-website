import { Dispatch, SetStateAction } from "react"
import { SeatType } from "../SeatType"

export interface SeatTableProps {
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    setSelectedSeat: Dispatch<SetStateAction<SeatType | null>>
}