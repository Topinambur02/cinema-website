from fastapi import APIRouter
from auth.auth_router import fastapi_users
from dto.UserDTO import UpdateUserDTO, UserDTO

user_router = APIRouter()

user_router.include_router(
    fastapi_users.get_users_router(UserDTO, UpdateUserDTO)
)