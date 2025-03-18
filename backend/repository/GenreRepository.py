from model.Genre import Genre
from db.Session import async_session_maker
from sqlalchemy import delete, insert, select, update

class GenreRepository:
    async def get_all(self) -> list[Genre]:
        async with async_session_maker() as session:
            query = select(Genre).order_by(Genre.id)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Genre:
        async with async_session_maker() as session:
            query = select(Genre).where(Genre.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, genre: dict) -> Genre:
        async with async_session_maker() as session:
            query = insert(Genre).values(**genre).returning(Genre)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def update(self, id: int, genre: dict) -> Genre:
        async with async_session_maker() as session:
            query = update(Genre).where(Genre.id == id).values(**genre).returning(Genre)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def delete(self, id: int) -> Genre:
        async with async_session_maker() as session:
            query = delete(Genre).where(Genre.id == id).returning(Genre)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
repository = GenreRepository()