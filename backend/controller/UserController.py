from fastapi import APIRouter, Depends
from enums.Role import Role
from model.User import User
from dto.TicketPurchaseRequest import TicketPurchaseRequest
from dependencies.Security import role_required
from service.UserService import service

user_router = APIRouter()

@user_router.post("/ticket")
async def purchase_ticket(
    request: TicketPurchaseRequest, 
    user: User = Depends(role_required([Role.ADMIN, Role.USER]))
):
    return await service.purchase_ticket(request, user)