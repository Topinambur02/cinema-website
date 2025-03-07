from exception.BaseException import BaseException
from fastapi import status

class EntityNotFoundException(BaseException):
    status_code = status.HTTP_404_NOT_FOUND
    detail = "Entity is not found"