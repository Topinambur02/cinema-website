from fastapi import APIRouter
from fastapi_users import FastAPIUsers
from auth.auth_backend import auth_backend
from auth.user_manager import get_user_manager
from dto.UserDTO import CreateUserDTO, UserDTO
from model.User import User

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)

auth_router = APIRouter()

auth_router.include_router(
    fastapi_users.get_auth_router(auth_backend)
)

auth_router.include_router(
    fastapi_users.get_register_router(UserDTO, CreateUserDTO),
)