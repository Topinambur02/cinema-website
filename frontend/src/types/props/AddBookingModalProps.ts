import { SeatType } from "../SeatType"
import { SessionType } from "../SessionType"

export interface AddBookingModalProps {
    isAddModalOpen: boolean
    setIsAddModalOpen: (value: boolean) => void
    availableSeats: SeatType[]
    availableSessions: SessionType[]
}