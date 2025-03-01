from typing import TypeVar
from pydantic import BaseModel

class MovieDTO(BaseModel):
    id: int
    name: str
    imageID: int
    ageLimit: str

DTOType = TypeVar("DTOType", bound=MovieDTO)