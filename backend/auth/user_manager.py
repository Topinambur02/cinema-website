from fastapi import Depends, Request
from fastapi_users import BaseUserManager, IntegerIDMixin
from model.User import User, get_user_db
from config.LogConfig import logger

class UserManager(IntegerIDMixin, BaseUserManager[User, int]):
    async def on_after_register(self, user: User, request: Request):
        logger.info(f"User {user.id} has registered.")

async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)
