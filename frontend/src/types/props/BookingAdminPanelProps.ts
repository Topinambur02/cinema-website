import { Dispatch, SetStateAction } from "react"
import { BookingType } from "../BookingType"
import { SeatType } from "../SeatType"
import { SessionType } from "../SessionType"

export interface BookingAdminPanelProps {
    isAddModalOpen: boolean
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    isEditModalOpen: boolean
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    selectedBooking: BookingType | null
    setSelectedBooking: Dispatch<SetStateAction<BookingType | null>>
    availableSeats: SeatType[]
    availableSessions: SessionType[]
}