from sqlalchemy import delete, insert, select, update
from model.Image import Image
from db.Session import async_session_maker

class ImageRepository:
    async def get_all(self) -> list[Image]:
        async with async_session_maker() as session:
            query = select(Image)
            result = await session.execute(query)
            return result.scalars().all()
        
    async def get_by_id(self, id: int) -> Image:
        async with async_session_maker() as session:
            query = select(Image).where(Image.id == id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    async def create(self, image: dict) -> Image:
        async with async_session_maker() as session:
            query = insert(Image).values(**image).returning(Image)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
    
    async def update(self, id: int, image: dict) -> Image:
        async with async_session_maker() as session:
            query = update(Image).where(Image.id == id).values(**image).returning(Image)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()
        
    async def delete(self, id: int) -> Image:
        async with async_session_maker() as session:
            query = delete(Image).where(Image.id == id).returning(Image)
            result = await session.execute(query)
            await session.commit()
            return result.scalar_one_or_none()

repository = ImageRepository()