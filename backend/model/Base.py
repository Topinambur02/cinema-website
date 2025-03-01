from typing import TypeVar
from sqlalchemy.orm import (
    DeclarativeBase, 
    Mapped, 
    mapped_column,
    declared_attr
)

class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(primary_key=True)
    
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()
    
ModelType = TypeVar('ModelType', bound=Base)