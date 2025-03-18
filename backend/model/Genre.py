from typing import Optional
from model.Base import Base
from sqlalchemy.orm import Mapped, relationship
from model.GenreToMovie import movie_genre_association

class Genre(Base):
    name: Mapped[str]
    movies: Mapped[Optional[list["Movie"]]] = relationship(
        secondary=movie_genre_association,
        back_populates="genres"
    )