from fastapi import HTTPException

class SeatAlreadyBookedException(HTTPException):
    status_code = 409
    detail="Seat is already booked"

    def __init__(self):
        super().__init__(status_code=self.status_code, detail=self.detail)
