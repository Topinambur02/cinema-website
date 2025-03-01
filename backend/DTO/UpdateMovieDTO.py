from typing import TypeVar
from pydantic import BaseModel

class UpdateMovieDTO(BaseModel):
    name: str
    imageID: int
    ageLimit: str

UpdateDTOType = TypeVar("UpdateDTOType", bound=UpdateMovieDTO)