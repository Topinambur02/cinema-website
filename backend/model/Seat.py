from sqlalchemy import ForeignKey
from model.Hall import Hall
from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Seat(Base):
    seatNumber: Mapped[int]
    hallId: Mapped[int] = mapped_column(
        ForeignKey(column="hall.id", ondelete="CASCADE")
    )
    hall: Mapped[Hall] = relationship(
        'Hall',
        foreign_keys=[hallId]
    )