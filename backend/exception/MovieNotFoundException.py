from exception.BaseException import BaseException

class MovieNotFoundException(BaseException):
    detail = "Movie is not found"