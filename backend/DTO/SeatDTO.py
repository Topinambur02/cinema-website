from typing import TypeVar
from pydantic import BaseModel

class SeatDTO(BaseModel):
    id: int
    seatNumber: int
    sessionId: int
    isBooked: bool
    price: int

class CreateSeatDTO(BaseModel):
    seatNumber: int
    sessionId: int
    price: int

class UpdateSeatDTO(BaseModel):
    seatNumber: int
    sessionId: int
    price: int

DTOType = TypeVar("DTOType", bound=SeatDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateSeatDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateSeatDTO)