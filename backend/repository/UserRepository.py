from model.User import User
from db.Session import async_session_maker
from sqlalchemy import select

class UserRepository:
    async def get_all(self) -> list[User]:
        async with async_session_maker() as session:
            query = select(User)
            result = await session.execute(query)
            return result.scalars().all()

repository = UserRepository()