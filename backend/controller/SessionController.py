from fastapi import APIRouter
from dto.SessionDTO import CreateSessionDTO, SessionDTO, UpdateSessionDTO
from service.SessionService import service

session_router = APIRouter()

@session_router.get('/')
async def get_all() -> list[SessionDTO]:
    return await service.get_all()

@session_router.get('/{id}')
async def get_by_id(id: int) -> SessionDTO:
    return await service.get_by_id(id)

@session_router.post('/')
async def create(dto: CreateSessionDTO) -> SessionDTO:
    return await service.create(dto)

@session_router.put('/{id}')
async def update(id: int, dto: UpdateSessionDTO) -> SessionDTO:
    return await service.update(id, dto)

@session_router.delete('/{id}')
async def delete(id: int) -> SessionDTO:
    return await service.delete(id)