from sqlalchemy import ForeignKey
from model.User import User
from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Seat(Base):
    seatNumber: Mapped[int]
    isBooked: Mapped[bool] = mapped_column(nullable=False, default=False)
    hallId: Mapped[int] = mapped_column(
        ForeignKey(column="hall.id", ondelete="CASCADE")
    )
    userId: Mapped[int] = mapped_column(
        ForeignKey(column="user.id", ondelete="NO ACTION"),
        nullable=True,
        default=None
    )
    user: Mapped[User] = relationship(
        'User',
        foreign_keys=[userId]
    )