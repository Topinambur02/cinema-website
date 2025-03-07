from exception.EntityNotFoundException import EntityNotFoundException

class ImageNotFoundException(EntityNotFoundException):
    detail = "Image is not found"