from exception.GenreNotFoundException import GenreNotFoundException
from dto.GenreDTO import GenreDTO, CreateGenreDTO, UpdateGenreDTO
from mapper.GenreMapper import GenreMapper as mapper
from repository.GenreRepository import repository

class GenreService:
    async def get_all(self) -> list[GenreDTO]:
        genres = await repository.get_all()
        return [mapper.to_dto(dto_model=GenreDTO, orm_model=genre) for genre in genres]
    
    async def get_by_id(self, id: int) -> GenreDTO:
        if await repository.get_by_id(id) is None:
            raise GenreNotFoundException()

        genre = await repository.get_by_id(id)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=genre)
    
    async def create(self, dto: CreateGenreDTO) -> GenreDTO:
        dict_genre = mapper.to_dict(dto)
        created_genre = await repository.create(dict_genre)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=created_genre)
    
    async def update(self, id: int, dto: UpdateGenreDTO) -> GenreDTO:
        if await repository.get_by_id(id) is None:
            raise GenreNotFoundException()

        dict_genre = mapper.to_dict(dto)
        created_genre = await repository.update(id, dict_genre)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=created_genre)
    
    async def delete(self, id: int) -> GenreDTO:
        if await repository.get_by_id(id) is None:
            raise GenreNotFoundException()

        genre = await repository.delete(id)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=genre)

service = GenreService()