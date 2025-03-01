
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio import async_sessionmaker
from Config import settings

async_engine = create_async_engine(
    settings.POSTGRES_URL
)

async_session_maker = async_sessionmaker(
    async_engine,
    expire_on_commit=False
)
