from typing import TypeVar
from pydantic import BaseModel
from fastapi import UploadFile

class ImageDTO(BaseModel):
    id: int
    name: str
    size: int
    url: str

DTOType = TypeVar("DTOType", bound=ImageDTO)