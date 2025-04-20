from typing import TypeVar
from pydantic import BaseModel

class SeatDTO(BaseModel):
    id: int
    seatNumber: int
    hallId: int

class CreateSeatDTO(BaseModel):
    seatNumber: int
    hallId: int

class UpdateSeatDTO(BaseModel):
    seatNumber: int
    hallId: int

DTOType = TypeVar("DTOType", bound=SeatDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateSeatDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateSeatDTO)