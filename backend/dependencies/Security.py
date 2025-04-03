from fastapi import Depends
from auth.auth_router import fastapi_users
from enums.Role import Role
from exception.NotEnoughPermission import NotEnoughPermissions
from model.User import User

def role_required(required_roles: list[Role]):
    async def dependency(user: User = Depends(fastapi_users.current_user())):

        if user.role not in required_roles:
            raise NotEnoughPermissions()
        
        return user
    
    return dependency

admin_dependency = [Depends(role_required([Role.ADMIN]))]