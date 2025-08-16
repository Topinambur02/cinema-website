from exception.EntityNotFoundException import EntityNotFoundException

class SeatNotFoundException(EntityNotFoundException):
    detail = "Seat is not found"