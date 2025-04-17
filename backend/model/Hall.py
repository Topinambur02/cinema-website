from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column

class Hall(Base):
    name: Mapped[str] = mapped_column(nullable=False)
    capacity: Mapped[int] = mapped_column(nullable=False)
    price: Mapped[int] = mapped_column(nullable=False)