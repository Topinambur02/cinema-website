from typing import TypeVar
from pydantic import BaseModel

class BookingDTO(BaseModel):
    id: int
    seatId: int
    userId:int
    sessionId: int

class CreateBookingDTO(BaseModel):
    seatId: int
    sessionId: int

class UpdateBookingDTO(CreateBookingDTO):
    pass

DTOType = TypeVar("DTOType", bound=BookingDTO)