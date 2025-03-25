from fastapi import APIRouter
from service.SeatService import service
from dto.SeatDTO import (
    CreateSeatDTO, 
    SeatDTO, 
    UpdateSeatDTO
)

seat_router = APIRouter()

@seat_router.get('/')
async def get_all() -> list[SeatDTO]:
    return await service.get_all()

@seat_router.get('/{id}')
async def get_by_id(id: int) -> SeatDTO:
    return await service.get_by_id(id)

@seat_router.post('/')
async def create(dto: CreateSeatDTO) -> SeatDTO:
    return await service.create(dto)

@seat_router.put('/{id}')
async def update(id: int, dto: UpdateSeatDTO) -> SeatDTO:
    return await service.update(id, dto)

@seat_router.delete('/{id}')
async def delete(id: int) -> SeatDTO:
    return await service.delete(id)
