from model.Base import ModelType
from dto.MovieDTO import DTOType

class MovieMapper:
    @classmethod
    def to_dto(cls, dto_model, orm_model, additional_attrs=None) -> DTOType:
        data = {
            'id': orm_model.id,
            'name': orm_model.name,
            'imageID': orm_model.imageID,
            'ageLimit': orm_model.ageLimit,
        }

        if additional_attrs:
            data.update(additional_attrs)

        return dto_model(**data)
    
    @classmethod
    def to_dict(cls, dto_model: DTOType) -> dict:
        return dto_model.model_dump(exclude_none=True)

    @classmethod
    def to_model(cls, orm_class: ModelType, dto_model: DTOType) -> ModelType:
        return orm_class(**dto_model.model_dump())