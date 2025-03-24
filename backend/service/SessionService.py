from exception.MovieNotFoundException import MovieNotFoundException
from exception.SessionNotFoundException import SessionNotFoundException
from dto.SessionDTO import CreateSessionDTO, SessionDTO, UpdateSessionDTO
from repository.SessionRepository import repository
from repository.MovieRepository import repository as movie_repository
from mapper.SessionMapper import SessionMapper as mapper

class SessionService:
    async def get_all(self) -> list[SessionDTO]:
        sessions = await repository.get_all()
        return [mapper.to_dto(dto_model=SessionDTO, orm_model=session) for session in sessions]
    
    async def get_by_id(self, id: int) -> SessionDTO:
        if await repository.get_by_id(id) is None:
            raise SessionNotFoundException()

        session = await repository.get_by_id(id)
        return mapper.to_dto(dto_model=SessionDTO, orm_model=session)
    
    async def create(self, dto: CreateSessionDTO) -> SessionDTO:
        movie_id = dto.movieId
        movie = await movie_repository.get_by_id(movie_id)

        if movie is None:
            raise MovieNotFoundException()
        
        session_dict = mapper.to_dict(dto)
        created_session = await repository.create(session_dict)
        created_session.movie = movie
        return mapper.to_dto(dto_model=SessionDTO, orm_model=created_session)
    
    async def update(self, id: int, dto: UpdateSessionDTO) -> SessionDTO:
        if await repository.get_by_id(id) is None:
            raise SessionNotFoundException()

        session_dict = mapper.to_dict(dto)
        created_session = await repository.update(id, session_dict)
        return mapper.to_dto(dto_model=SessionDTO, orm_model=created_session)
    
    async def delete(self, id: int) -> SessionDTO:
        if await repository.get_by_id(id) is None:
            raise SessionNotFoundException()

        session = await repository.delete(id)
        return mapper.to_dto(dto_model=SessionDTO, orm_model=session)
    
service = SessionService()