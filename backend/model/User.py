from sqlalchemy.orm import Mapped, mapped_column
from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy.dialects.postgresql import ENUM
from model.Base import Base
from enums.Role import Role
from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase
from typing import AsyncGenerator
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from db.Session import async_session_maker

class User(Base, SQLAlchemyBaseUserTable[int]):
    role: Mapped[str] = mapped_column(
        ENUM(Role, name="role", create_type=False), 
        default=Role.USER
    )

async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session

async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)
    