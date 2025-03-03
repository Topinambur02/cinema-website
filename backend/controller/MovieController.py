from fastapi import APIRouter
from dto.MovieDTO import (
    MovieDTO, CreateMovieDTO, UpdateMovieDTO
)
from service.MovieService import service

movie_router = APIRouter()

@movie_router.get('/')
async def get_all() -> list[MovieDTO]:
    return await service.get_all()

@movie_router.get('/{id}')
async def get_by_id(id: int) -> MovieDTO:
    return await service.get_by_id(id)

@movie_router.post('/')
async def create(dto: CreateMovieDTO) -> MovieDTO:
    return await service.create(dto)

@movie_router.put('/{id}')
async def update(id: int, dto: UpdateMovieDTO) -> MovieDTO:
    return await service.update(id, dto)

@movie_router.delete('/{id}')
async def delete(id: int) -> MovieDTO:
    return await service.delete(id)
