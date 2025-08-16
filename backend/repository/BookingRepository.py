from model.Session import Session
from model.Movie import Movie
from model.Booking import Booking
from db.Session import async_session_maker
from sqlalchemy import delete, insert, select, update, func

class BookingRepository:
    async def get_all(self) -> list[Booking]:
        async with async_session_maker() as session:
            query = select(Booking)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Booking:
        async with async_session_maker() as session:
            query = select(Booking).where(Booking.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def get_tickets_sold(self) -> list[tuple[str, int]]:
        async with async_session_maker() as session:
            query = select(
                Movie.name, 
                func.coalesce(func.count(Booking.id), 0).label('tickets_sold')
            ).select_from(Movie) \
            .outerjoin(Session, Session.movieId == Movie.id) \
            .outerjoin(Booking, Booking.sessionId == Session.id) \
            .group_by(Movie.name)

            result = await session.execute(query)
            return result.all()
        
    async def create(self, booking_dict: dict) -> Booking:
        async with async_session_maker() as session:
            query = insert(Booking).values(**booking_dict).returning(Booking)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def update(self, id: int, booking_dict: dict) -> Booking:
        async with async_session_maker() as session:
            query = update(Booking).where(Booking.id == id).values(**booking_dict).returning(Booking)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def delete(self, id: int) -> Booking:
        async with async_session_maker() as session:
            query = delete(Booking).where(Booking.id == id).returning(Booking)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()

repository = BookingRepository()