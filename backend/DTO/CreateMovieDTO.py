from typing import TypeVar
from pydantic import BaseModel

class CreateMovieDTO(BaseModel):
    name: str
    imageID: int
    ageLimit: str

CreateDTOType = TypeVar("CreateDTOType", bound=CreateMovieDTO)