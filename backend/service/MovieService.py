from exception.MovieNotFoundException import MovieNotFoundException
from repository.MovieRepository import repository
from mapper.MovieMapper import MovieMapper as mapper
from dto.MovieDTO import (
    MovieDTO, 
    CreateMovieDTO, 
    UpdateMovieDTO
)

class MovieService:
    async def get_all(self) -> list[MovieDTO]:
        movies = await repository.get_all()
        return [mapper.to_dto(dto_model=MovieDTO, orm_model=movie) for movie in movies]
    
    async def get_by_id(self, id: int) -> MovieDTO:
        if await repository.get_by_id(id) is None:
            raise MovieNotFoundException()

        movie = await repository.get_by_id(id)
        return mapper.to_dto(dto_model=MovieDTO, orm_model=movie)
    
    async def create(self, dto: CreateMovieDTO) -> MovieDTO:
        dict_movie = mapper.to_dict(dto)
        created_movie = await repository.create(dict_movie)
        return mapper.to_dto(dto_model=MovieDTO, orm_model=created_movie)
    
    async def update(self, id: int, dto: UpdateMovieDTO) -> MovieDTO:
        if await repository.get_by_id(id) is None:
            raise MovieNotFoundException()

        dict_movie = mapper.to_dict(dto)
        created_movie = await repository.update(id, dict_movie)
        return mapper.to_dto(dto_model=MovieDTO, orm_model=created_movie)
    
    async def delete(self, id: int) -> MovieDTO:
        if await repository.get_by_id(id) is None:
            raise MovieNotFoundException()

        movie = await repository.delete(id)
        return mapper.to_dto(dto_model=MovieDTO, orm_model=movie)
    
service = MovieService()