from fastapi import APIRouter, Depends
from enums.Role import Role
from service.HallService import service
from dependencies.Security import admin_dependency, role_required
from dto.HallDTO import (
    CreateHallDTO, 
    HallDTO, 
    UpdateHallDTO
)

hall_router = APIRouter()

@hall_router.get('/')
async def get_all() -> list[HallDTO]:
    return await service.get_all()

@hall_router.get('/{id}')
async def get_by_id(id: int) -> HallDTO:
    return await service.get_by_id(id)

@hall_router.post('/', dependencies=admin_dependency)
async def create(dto: CreateHallDTO) -> HallDTO:
    return await service.create(dto)

@hall_router.put('/{id}', dependencies=admin_dependency)
async def update(id: int, dto: UpdateHallDTO) -> HallDTO:
    return await service.update(id, dto)

@hall_router.delete('/{id}', dependencies=admin_dependency)
async def delete(id: int) -> HallDTO:
    return await service.delete(id)