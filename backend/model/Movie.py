from pydantic import BaseModel
from model.Base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.dialects.postgresql import ENUM
from enums.AgeLimit import AgeLimit

class Movie(Base):
    name: Mapped[str]
    imageID: Mapped[int]
    ageLimit: Mapped[str] = mapped_column(ENUM(AgeLimit, name="age_limit", create_type=False))
