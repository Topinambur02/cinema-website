from exception.BaseException import BaseException

class SessionNotFoundException(BaseException):
    detail = "Session is not found"