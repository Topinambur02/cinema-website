from exception.BaseException import BaseException

class GenreNotFoundException(BaseException):
    detail = "Genre is not found"