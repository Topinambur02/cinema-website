from fastapi_users import schemas
from enums.Role import Role

class UserDTO(schemas.BaseUser[int]):
    role: Role

class CreateUserDTO(schemas.BaseUserCreate):
    role: Role

class UpdateUserDTO(schemas.BaseUserUpdate):
    role: Role
