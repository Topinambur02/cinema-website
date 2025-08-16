from exception.GenreNotFoundException import GenreNotFoundException
from DTO.GenreDTO import GenreDTO, CreateGenreDTO, UpdateGenreDTO
from mapper.GenreMapper import GenreMapper as mapper
from repository.GenreRepository import repository

class GenreService:
    async def get_all(self) -> list[GenreDTO]:
        genres = await repository.get_all()
        return [mapper.to_dto(dto_model=GenreDTO, orm_model=genre) for genre in genres]
    
    async def get_by_id(self, id: int) -> GenreDTO:
        genre = await repository.get_by_id(id)

        if not(genre):
            raise GenreNotFoundException()

        return mapper.to_dto(dto_model=GenreDTO, orm_model=genre)
    
    async def get_by_ids(self, ids: list[int]) -> list[GenreDTO]:
        genres = await repository.get_by_ids(ids)
        return [mapper.to_dto(dto_model=GenreDTO, orm_model=genre) for genre in genres]
    
    async def create(self, dto: CreateGenreDTO) -> GenreDTO:
        genre_dict = mapper.to_dict(dto)
        created_genre = await repository.create(genre_dict)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=created_genre)
    
    async def update(self, id: int, dto: UpdateGenreDTO) -> GenreDTO:
        genre = await repository.get_by_id(id)

        if not(genre):
            raise GenreNotFoundException()

        genre_dict = mapper.to_dict(dto)
        updated_genre = await repository.update(id, genre_dict)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=updated_genre)
    
    async def delete(self, id: int) -> GenreDTO:
        genre = await repository.get_by_id(id)

        if not(genre):
            raise GenreNotFoundException()

        deleted_genre = await repository.delete(id)
        return mapper.to_dto(dto_model=GenreDTO, orm_model=deleted_genre)

service = GenreService()