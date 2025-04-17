from typing import TypeVar, Optional
from pydantic import BaseModel

class SeatDTO(BaseModel):
    id: int
    seatNumber: int
    hallId: int
    isBooked: bool
    userId: Optional[int] = None

class CreateSeatDTO(BaseModel):
    seatNumber: int
    hallId: int

class UpdateSeatDTO(BaseModel):
    seatNumber: int
    isBooked: bool
    hallId: int
    userId: int

DTOType = TypeVar("DTOType", bound=SeatDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateSeatDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateSeatDTO)