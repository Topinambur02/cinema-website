from model.Base import Base
from sqlalchemy.orm import Mapped

class Image(Base):
    name: Mapped[str]
    size: Mapped[int]
    url: Mapped[str]
    