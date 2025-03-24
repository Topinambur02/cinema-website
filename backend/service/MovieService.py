from exception.ImageNotFoundException import ImageNotFoundException
from model.Genre import Genre
from exception.GenreNotFoundException import GenreNotFoundException
from exception.MovieNotFoundException import MovieNotFoundException
from repository.MovieRepository import repository
from service.GenreService import service as genre_service
from service.ImageService import service as image_service
from mapper.MovieMapper import MovieMapper as mapper
from mapper.GenreMapper import GenreMapper as genre_mapper
from dto.MovieDTO import (
    MovieDTO, 
    CreateMovieDTO, 
    UpdateMovieDTO
)

class MovieService:
    async def get_all(self) -> list[MovieDTO]:
        movies = await repository.get_all()
        return [
            mapper.to_dto(
                dto_model=MovieDTO,
                orm_model=movie,
                additional_attrs={"genres_ids": [genre.id for genre in movie.genres]}
            )
            for movie in movies
        ]
    
    async def get_by_id(self, id: int) -> MovieDTO:
        movie = await repository.get_by_id(id)

        if not(movie):
            raise MovieNotFoundException()
        
        genres_ids = {"genres_ids": [genre.id for genre in movie.genres]}
        
        return mapper.to_dto(
            dto_model=MovieDTO, 
            orm_model=movie, 
            additional_attrs=genres_ids
        )
    
    async def create(self, dto: CreateMovieDTO) -> MovieDTO:
        genres_ids = dto.genres_ids
        image_id = dto.imageID
        genres_dtos = await genre_service.get_by_ids(genres_ids)
        image_dto = await image_service.get_by_id(image_id)

        if not(genres_dtos):
            raise GenreNotFoundException()
        
        if not(image_dto):
            raise ImageNotFoundException()

        movie_dict = mapper.to_dict(dto)
        created_movie = await repository.create(movie_dict)

        return mapper.to_dto(
            dto_model=MovieDTO,
            orm_model=created_movie,
            additional_attrs={'genres_ids': genres_ids}
        )
    
    async def update(self, id: int, dto: UpdateMovieDTO) -> MovieDTO:
        movie = await repository.get_by_id(id)
        genres_ids = dto.genres_ids
        genres_dtos = await genre_service.get_by_ids(genres_ids)
        genres = [genre_mapper.to_model(orm_class=Genre, dto_model=genre) for genre in genres_dtos]

        if not(movie):
            raise MovieNotFoundException()

        if not(genres):
            raise GenreNotFoundException()

        movie_dict = mapper.to_dict(dto)
        updated_movie = await repository.update(id, movie_dict)
        genres_ids = {"genres_ids": [genre.id for genre in updated_movie.genres]}

        return mapper.to_dto(
            dto_model=MovieDTO, 
            orm_model=updated_movie, 
            additional_attrs=genres_ids
        )
    
    async def delete(self, id: int) -> MovieDTO:
        movie = await repository.get_by_id(id)

        if not(movie):
            raise MovieNotFoundException()

        await repository.delete(id)
    
service = MovieService()