from exception.EntityNotFoundException import EntityNotFoundException

class BookingNotFoundException(EntityNotFoundException):
    status_code = 404
    detail = "Booking not found"