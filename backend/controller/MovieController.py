from fastapi import APIRouter
from service.MovieService import service
from dependencies.Security import admin_dependency
from dto.MovieDTO import (
    MovieDTO, 
    CreateMovieDTO, 
    UpdateMovieDTO
)

movie_router = APIRouter()

@movie_router.get('/')
async def get_all() -> list[MovieDTO]:
    return await service.get_all()

@movie_router.get('/{id}')
async def get_by_id(id: int) -> MovieDTO:
    return await service.get_by_id(id)

@movie_router.post('/', dependencies=admin_dependency)
async def create(dto: CreateMovieDTO) -> MovieDTO:
    return await service.create(dto)

@movie_router.put('/{id}', dependencies=admin_dependency)
async def update(id: int, dto: UpdateMovieDTO) -> MovieDTO:
    return await service.update(id, dto)

@movie_router.delete('/{id}', dependencies=admin_dependency)
async def delete(id: int) -> None:
    await service.delete(id)
