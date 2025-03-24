from model.Session import Session
from sqlalchemy import select, insert, update, delete
from db.Session import async_session_maker

class SessionRepository:
    async def get_all(self) -> list[Session]:
        async with async_session_maker() as session:
            query = select(Session).order_by(Session.id)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Session:
        async with async_session_maker() as session:
            query = select(Session).where(Session.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, session_dict: dict) -> Session:
        async with async_session_maker() as session:
            query = insert(Session).values(**session_dict).returning(Session)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def update(self, id: int, session_dict: dict) -> Session:
        async with async_session_maker() as session:
            query = update(Session).where(Session.id == id).values(**session_dict).returning(Session)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def delete(self, id: int) -> Session:
        async with async_session_maker() as session:
            query = delete(Session).where(Session.id == id).returning(Session)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
repository = SessionRepository()