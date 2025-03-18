from exception.GenreNotFoundException import GenreNotFoundException
from exception.MovieNotFoundException import MovieNotFoundException
from repository.MovieRepository import repository
from repository.GenreRepository import repository as genre_repository
from mapper.MovieMapper import MovieMapper as mapper
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

        if movie is None:
            raise MovieNotFoundException()
        
        genres_ids = {"genres_ids": [genre.id for genre in movie.genres]}
        
        return mapper.to_dto(dto_model=MovieDTO, orm_model=movie, additional_attrs=genres_ids)
    
    async def create(self, dto: CreateMovieDTO) -> MovieDTO:
        genres_ids = dto.genres_ids

        genres = []
        for genre_id in genres_ids:
            genre = await genre_repository.get_by_id(genre_id)

            if genre is None:
                raise GenreNotFoundException()
            
            genres.append(genre)

        dict_movie = dto.model_dump(exclude={'genres_ids'})
        dict_movie["genres"] = genres
        created_movie = await repository.create(dict_movie)

        return mapper.to_dto(
            dto_model=MovieDTO,
            orm_model=created_movie,
            additional_attrs={'genres_ids': genres_ids}
        )
    
    async def update(self, id: int, dto: UpdateMovieDTO) -> MovieDTO:
        movie = await repository.get_by_id(id)
        genres_ids = dto.genres_ids

        if movie is None:
            raise MovieNotFoundException()

        for genre_id in genres_ids:
            genre = await genre_repository.get_by_id(genre_id)

            if genre is None:
                raise GenreNotFoundException()

        dict_movie = dto.model_dump()
        updated_movie = await repository.update(id, dict_movie)
        genres_ids = {"genres_ids": [genre.id for genre in updated_movie.genres]}

        return mapper.to_dto(
            dto_model=MovieDTO, 
            orm_model=updated_movie, 
            additional_attrs=genres_ids
        )
    
    async def delete(self, id: int) -> MovieDTO:
        movie = await repository.get_by_id(id)

        if movie is None:
            raise MovieNotFoundException()

        movie = await repository.delete(id)
        return mapper.to_dto(dto_model=MovieDTO, orm_model=movie)
    
service = MovieService()