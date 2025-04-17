from datetime import datetime
from model.Hall import Hall
from model.Movie import Movie
from sqlalchemy import ForeignKey
from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Session(Base):
    startTime: Mapped[datetime] = mapped_column(nullable=False)
    endTime: Mapped[datetime] = mapped_column(nullable=False)
    movieId: Mapped[int] = mapped_column(
        ForeignKey(column="movie.id", ondelete="NO ACTION")
    )
    movie: Mapped[Movie] = relationship(
        'Movie',
        foreign_keys=[movieId]
    )
    hallId: Mapped[int] = mapped_column(
        ForeignKey(column="hall.id", ondelete="CASCADE")
    )
    hall: Mapped[Hall] = relationship(
        'Hall',
        foreign_keys=[hallId]   
    )