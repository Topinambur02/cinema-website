from sqlalchemy import ForeignKey
from model.Image import Image
from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import ENUM
from enums.AgeLimit import AgeLimit

class Movie(Base):
    name: Mapped[str]
    imageID: Mapped[int] = mapped_column(
        ForeignKey(column="image.id", ondelete="CASCADE")
    )
    ageLimit: Mapped[str] = mapped_column(ENUM(AgeLimit, name="age_limit", create_type=False))
    image: Mapped[Image] = relationship(
        'Image',
        foreign_keys=[imageID]
    )
