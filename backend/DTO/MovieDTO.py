from typing import TypeVar
from pydantic import BaseModel

class MovieDTO(BaseModel):
    id: int
    name: str
    imageID: int
    description: str
    ageLimit: str
    genres_ids: list[int]

class CreateMovieDTO(BaseModel):
    name: str
    imageID: int
    description: str
    ageLimit: str
    genres_ids: list[int]

class UpdateMovieDTO(BaseModel):
    name: str
    imageID: int
    description: str
    ageLimit: str
    genres_ids: list[int]

DTOType = TypeVar("DTOType", bound=MovieDTO)
CreateDTOType = TypeVar("CreateDTOType", bound=CreateMovieDTO)
UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateMovieDTO)