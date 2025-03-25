from sqlalchemy import ForeignKey
from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from model.Session import Session

class Seat(Base):
    seatNumber: Mapped[int]
    isBooked: Mapped[bool] = mapped_column(nullable=False, default=False)
    price: Mapped[int]
    sessionId: Mapped[int] = mapped_column(
        ForeignKey(column="session.id", ondelete="NO ACTION")
    )
    session: Mapped[Session] = relationship(
        'Session',
        foreign_keys=[sessionId]
    )