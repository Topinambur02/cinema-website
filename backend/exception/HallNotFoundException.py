from exception.EntityNotFoundException import EntityNotFoundException

class HallNotFoundException(EntityNotFoundException):
    detail = "Hall is not found"