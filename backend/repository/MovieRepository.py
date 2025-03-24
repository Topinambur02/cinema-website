from model.Genre import Genre
from model.Movie import Movie
from sqlalchemy import delete, select
from db.Session import async_session_maker
from sqlalchemy.orm import selectinload

class MovieRepository:
    async def get_all(self) -> list[Movie]:
        async with async_session_maker() as session:
            query = select(Movie).options(selectinload(Movie.genres))
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Movie:
        async with async_session_maker() as session:
            query = select(Movie).options(selectinload(Movie.genres)).where(Movie.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, movie_dict: dict) -> Movie:
        async with async_session_maker() as session:
            genres_ids = movie_dict.pop('genres_ids', [])
            movie = Movie(**movie_dict)

            if genres_ids:
                query = select(Genre).where(Genre.id.in_(genres_ids))
                result = await session.execute(query)
                genres = result.scalars().all()
                movie.genres = genres
        
            session.add(movie)
            await session.commit()
            await session.refresh(movie)

            return movie
        
    async def update(self, id: int, movie_dict: dict) -> Movie:
        async with async_session_maker() as session:
            genres_ids = movie_dict.pop('genres_ids', None)
            query = select(Movie).options(selectinload(Movie.genres)).where(Movie.id == id)
            result = await session.execute(query)
            movie = result.scalar_one_or_none()
            
            for key, value in movie_dict.items():
                setattr(movie, key, value)

            if genres_ids:
                query_for_genres = select(Genre).where(Genre.id.in_(genres_ids))
                result = await session.execute(query_for_genres)
                genres = result.scalars().all()
                movie.genres = genres

            session.add(movie)
            await session.commit()
            await session.refresh(movie)
            
            return movie
    
    async def delete(self, id: int) -> Movie:
        async with async_session_maker() as session:
            query = delete(Movie).where(Movie.id == id).returning(Movie)
            await session.execute(query)
            await session.commit()

repository = MovieRepository()