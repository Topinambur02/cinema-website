from typing import TypeVar
from pydantic import BaseModel

class MovieDTO(BaseModel):
    id: int
    name: str
    imageID: int
    ageLimit: str

class CreateMovieDTO(BaseModel):
    name: str
    imageID: int
    ageLimit: str

class UpdateMovieDTO(BaseModel):
    name: str
    imageID: int
    ageLimit: str

DTOType = TypeVar("DTOType", bound=MovieDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateMovieDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateMovieDTO)