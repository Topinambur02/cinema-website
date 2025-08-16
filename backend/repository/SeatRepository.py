from sqlalchemy import delete, insert, select, update
from db.Session import async_session_maker
from model.Seat import Seat

class SeatRepository:
    async def get_all(self) -> list[Seat]:
        async with async_session_maker() as session:
            query = select(Seat)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Seat:
        async with async_session_maker() as session:
            query = select(Seat).where(Seat.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, seat_dict: dict) -> Seat:
        async with async_session_maker() as session:
            query = insert(Seat).values(**seat_dict).returning(Seat)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def update(self, id: int, seat_dict: dict) -> Seat:
        async with async_session_maker() as session:
            query = update(Seat).where(Seat.id == id).values(**seat_dict).returning(Seat)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def delete(self, id: int) -> Seat:
        async with async_session_maker() as session:
            query = delete(Seat).where(Seat.id == id).returning(Seat)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
repository = SeatRepository()