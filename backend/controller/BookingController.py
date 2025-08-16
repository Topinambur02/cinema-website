from fastapi import APIRouter, Depends
from enums.Role import Role
from model.User import User
from DTO.BookingDTO import BookingDTO, CreateBookingDTO, UpdateBookingDTO
from dependencies.Security import admin_dependency, role_required
from service.BookingService import service
from typing import List

booking_router = APIRouter()

@booking_router.get("/")
async def get_all() -> list[BookingDTO]:
    return await service.get_all()

@booking_router.get("/tickets_sold")
async def get_tickets_sold() -> list[tuple[str, int]]:
    return await service.get_tickets_sold()

@booking_router.get("/{id}")
async def get_by_id(id: int) -> BookingDTO:
    return await service.get_by_id(id)

@booking_router.post("/")
async def create(
    dtos: List[CreateBookingDTO],
    user: User = Depends(role_required([Role.ADMIN, Role.USER]))
) -> List[BookingDTO]:
    return await service.create(dtos, user)

@booking_router.put("/{id}")
async def update(
    id: int, 
    dto: UpdateBookingDTO,
    user: User = Depends(role_required([Role.ADMIN, Role.USER]))
) -> BookingDTO:
    return await service.update(id, dto, user)

@booking_router.delete("/{id}", dependencies=admin_dependency)
async def delete(id: int) -> BookingDTO:
    return await service.delete(id)
