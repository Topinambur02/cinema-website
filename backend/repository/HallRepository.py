from model.Hall import Hall
from db.Session import async_session_maker
from sqlalchemy import select, insert, update, delete

class HallRepository:
    async def get_all(self) -> list[Hall]:
        async with async_session_maker() as session:
            query = select(Hall)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Hall:
        async with async_session_maker() as session:
            query = select(Hall).where(Hall.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, hall_dict: dict) -> Hall:
        async with async_session_maker() as session:
            query = insert(Hall).values(**hall_dict).returning(Hall)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def update(self, id: int, hall_dict: dict) -> Hall:
        async with async_session_maker() as session:
            query = update(Hall).where(Hall.id == id).values(**hall_dict).returning(Hall)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def delete(self, id: int) -> Hall:
        async with async_session_maker() as session:
            query = delete(Hall).where(Hall.id == id).returning(Hall)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
repository = HallRepository()