from typing import TypeVar, Optional
from pydantic import BaseModel

class SeatDTO(BaseModel):
    id: int
    seatNumber: int
    sessionId: int
    isBooked: bool
    price: int
    userId: Optional[int] = None

class CreateSeatDTO(BaseModel):
    seatNumber: int
    sessionId: int
    price: int

class UpdateSeatDTO(BaseModel):
    seatNumber: int
    isBooked: bool
    sessionId: int
    userId: int
    price: int

DTOType = TypeVar("DTOType", bound=SeatDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateSeatDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateSeatDTO)