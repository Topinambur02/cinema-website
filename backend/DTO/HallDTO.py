from typing import TypeVar
from pydantic import BaseModel

class HallDTO(BaseModel):
    id: int
    name: str
    capacity: int
    price: int

class CreateHallDTO(BaseModel):
    name: str
    capacity: int
    price: int

class UpdateHallDTO(BaseModel):
    name: str
    capacity: int
    price: int

DTOType = TypeVar('DTOTypes', bound=HallDTO)
CreateDTOType = TypeVar('CreateDTOType', bound=CreateHallDTO)
UpdateDTOType = TypeVar('UpdateDTOType', bound=UpdateHallDTO)