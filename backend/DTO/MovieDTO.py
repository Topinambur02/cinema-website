from typing import TypeVar
from pydantic import BaseModel
from enums.AgeLimit import AgeLimit

class MovieDTO(BaseModel):
    id: int
    name: str
    imageID: int
    description: str
    ageLimit: AgeLimit
    genres_ids: list[int]

class CreateMovieDTO(BaseModel):
    name: str
    imageID: int
    description: str
    ageLimit: AgeLimit
    genres_ids: list[int]

class UpdateMovieDTO(BaseModel):
    name: str
    imageID: int
    description: str
    ageLimit: AgeLimit
    genres_ids: list[int]

DTOType = TypeVar("DTOType", bound=MovieDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateMovieDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateMovieDTO)