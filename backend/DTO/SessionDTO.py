from typing import TypeVar
from pydantic import BaseModel
from datetime import datetime

class SessionDTO(BaseModel):
    id: int
    startTime: datetime
    endTime: datetime
    movieId: int
    hallId: int

class CreateSessionDTO(BaseModel):
    startTime: datetime
    endTime: datetime
    movieId: int
    hallId: int

class UpdateSessionDTO(BaseModel):
    startTime: datetime
    endTime: datetime
    movieId: int
    hallId: int

DTOType = TypeVar("DTOType", bound=SessionDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateSessionDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateSessionDTO)