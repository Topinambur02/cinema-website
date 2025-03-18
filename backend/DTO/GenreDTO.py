from typing import TypeVar
from pydantic import BaseModel

class GenreDTO(BaseModel):
    id: int
    name: str

class CreateGenreDTO(BaseModel):
    name: str

class UpdateGenreDTO(BaseModel):
    name: str

DTOType = TypeVar("DTOType", bound=GenreDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateGenreDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateGenreDTO)