from fastapi import APIRouter
from service.GenreService import service
from dto.GenreDTO import CreateGenreDTO, UpdateGenreDTO, GenreDTO

genre_router = APIRouter()

@genre_router.get('/')
async def get_all() -> list[GenreDTO]:
    return await service.get_all()

@genre_router.get('/{id}')
async def get_by_id(id: int) -> GenreDTO:
    return await service.get_by_id(id)

@genre_router.post('/')
async def create(dto: CreateGenreDTO) -> GenreDTO:
    return await service.create(dto)

@genre_router.put('/{id}')
async def update(id: int, dto: UpdateGenreDTO) -> GenreDTO:
    return await service.update(id, dto)

@genre_router.delete('/{id}')
async def delete(id: int) -> GenreDTO:
    return await service.delete(id)