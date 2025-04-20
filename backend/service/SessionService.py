from exception.SessionNotFoundException import SessionNotFoundException
from repository.SessionRepository import repository
from service.MovieService import service as movie_service
from mapper.SessionMapper import SessionMapper as mapper
from dto.SessionDTO import (
    CreateSessionDTO, 
    SessionDTO, 
    UpdateSessionDTO
)

class SessionService:
    async def get_all(self) -> list[SessionDTO]:
        sessions = await repository.get_all()

        return [mapper.to_dto(dto_model=SessionDTO, orm_model=session) for session in sessions]
    
    async def get_by_id(self, id: int) -> SessionDTO:
        session = await repository.get_by_id(id)

        if not(session) and session is not None:
            raise SessionNotFoundException()
        
        if session is None:
            return None

        return mapper.to_dto(dto_model=SessionDTO, orm_model=session)
    
    async def create(self, dto: CreateSessionDTO) -> SessionDTO:
        movie_id = dto.movieId
        movie = await movie_service.get_by_id(movie_id)
        session_dict = mapper.to_dict(dto)
        created_session = await repository.create(session_dict)
        created_session.movie = movie
        
        return mapper.to_dto(dto_model=SessionDTO, orm_model=created_session)
    
    async def update(self, id: int, dto: UpdateSessionDTO) -> SessionDTO:
        movie_id = dto.movieId
        session = await service.get_by_id(id)
        movie = await movie_service.get_by_id(movie_id)
        session_dict = mapper.to_dict(dto)
        updated_session = await repository.update(id, session_dict)

        return mapper.to_dto(dto_model=SessionDTO, orm_model=updated_session)
    
    async def delete(self, id: int) -> SessionDTO:
        session = await service.get_by_id(id)
        deleted_session = await repository.delete(id)

        return mapper.to_dto(dto_model=SessionDTO, orm_model=deleted_session)
    
service = SessionService()