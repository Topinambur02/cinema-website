from model.Movie import Movie
from sqlalchemy import delete, insert, select, update
from db.Session import async_session_maker

class MovieRepository:
    async def get_all(self) -> list[Movie]:
        async with async_session_maker() as session:
            query = select(Movie).order_by(Movie.id)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Movie:
        async with async_session_maker() as session:
            query = select(Movie).where(Movie.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, movie: dict) -> Movie:
        async with async_session_maker() as session:
            query = insert(Movie).values(**movie).returning(Movie)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def update(self, id: int, movie: dict) -> Movie:
        async with async_session_maker() as session:
            query = update(Movie).where(Movie.id == id).values(**movie).returning(Movie)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
    
    async def delete(self, id: int) -> Movie:
        async with async_session_maker() as session:
            query = delete(Movie).where(Movie.id == id).returning(Movie)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()

repository = MovieRepository()