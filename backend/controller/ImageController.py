from fastapi import UploadFile
from service.ImageService import service
from dependencies.Security import admin_dependency
from fastapi import APIRouter
from dto.ImageDTO import ImageDTO

image_router = APIRouter()

@image_router.get('/')
async def get_all() -> list[ImageDTO]:
    return await service.get_all()

@image_router.get('/{id}')
async def get_by_id(id: int) -> ImageDTO:
    return await service.get_by_id(id)

@image_router.post('/', dependencies=admin_dependency)
async def create(image: UploadFile) -> ImageDTO:
    return await service.create(image)

@image_router.put('/{id}', dependencies=admin_dependency)
async def update(id: int, image: UploadFile) -> ImageDTO:
    return await service.update(id, image)

@image_router.delete('/{id}', dependencies=admin_dependency)
async def delete(id: int) -> None:
    await service.delete(id)
