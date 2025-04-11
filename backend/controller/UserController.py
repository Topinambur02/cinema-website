from fastapi import APIRouter, Depends
from auth.auth_router import fastapi_users
from dto.UserDTO import UpdateUserDTO, UserDTO
from enums.Role import Role
from model.User import User
from dto.TicketPurchaseRequest import TicketPurchaseRequest
from dependencies.Security import role_required
from service.UserService import service

user_router = APIRouter()

user_router.include_router(
    fastapi_users.get_users_router(UserDTO, UpdateUserDTO)
)

@user_router.post("/ticket")
async def purchase_ticket(
    request: TicketPurchaseRequest, 
    user: User = Depends(role_required([Role.ADMIN, Role.USER]))
):
    return await service.purchase_ticket(request, user)