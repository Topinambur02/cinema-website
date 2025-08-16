import { Dispatch, SetStateAction } from "react"
import { BookingType } from "../BookingType"

export interface BookingTableProps {
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    setSelectedBooking: Dispatch<SetStateAction<BookingType | null>>
}