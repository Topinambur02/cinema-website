import { BookingAdminPanelProps } from "../../../types/props/BookingAdminPanelProps"
import AddBookingModal from "./AddBookingModal"
import BookingTable from "./BookingTable"
import EditBookingModal from "./EditBookingModal"

const BookingAdminPanel = ({
    isAddModalOpen,
    setIsAddModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    selectedBooking,
    setSelectedBooking,
    availableSeats,
    availableSessions
}: BookingAdminPanelProps) => {
    return (
        <>
            <BookingTable
                setIsAddModalOpen={setIsAddModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                setSelectedBooking={setSelectedBooking}
            />

            <EditBookingModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                selectedBooking={selectedBooking}
                availableSeats={availableSeats}
                availableSessions={availableSessions}
            />

            <AddBookingModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                availableSeats={availableSeats}
                availableSessions={availableSessions}
            />
        </>
    )
}

export default BookingAdminPanel