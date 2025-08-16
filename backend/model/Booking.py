from typing import Optional
from sqlalchemy import ForeignKey
from model.Seat import Seat
from model.User import User
from model.Base import Base
from model.Session import Session
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Booking(Base):
    userId: Mapped[Optional[int]] = mapped_column(
        ForeignKey(column="user.id", ondelete="CASCADE"),
        nullable=True, 
        default=None
    )
    user: Mapped[User] = relationship(
        'User',
        foreign_keys=[userId]
    )
    sessionId: Mapped[Optional[int]] = mapped_column(
        ForeignKey(column="session.id", ondelete="CASCADE"),
        nullable=True, 
        default=None
    )
    session: Mapped[Session] = relationship(
        'Session',
        foreign_keys=[sessionId]
    )
    seatId: Mapped[int] = mapped_column(
        ForeignKey(column="seat.id", ondelete="CASCADE"), 
        nullable=False
    )
    seat: Mapped[Seat] = relationship(
        'Seat',
        foreign_keys=[seatId]
    )
