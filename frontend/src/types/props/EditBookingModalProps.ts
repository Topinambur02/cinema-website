import { BookingType } from "../BookingType"
import { SeatType } from "../SeatType"
import { SessionType } from "../SessionType"

export interface EditBookingModalProps {
    isEditModalOpen: boolean 
    setIsEditModalOpen: (value: boolean) => void
    selectedBooking: BookingType | null
    availableSeats: SeatType[]
    availableSessions: SessionType[]
}