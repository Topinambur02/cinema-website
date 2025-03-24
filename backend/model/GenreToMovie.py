from sqlalchemy import Table, Column, Integer, ForeignKey
from model.Base import Base

movie_genre_association = Table(
    "movie_genre",
    Base.metadata,
    Column("movie_id", Integer, ForeignKey("movie.id", ondelete="CASCADE"), primary_key=True),
    Column("genre_id", Integer, ForeignKey("genre.id", ondelete="CASCADE"), primary_key=True)
)