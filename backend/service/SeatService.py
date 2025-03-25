from exception.SessionNotFoundException import SessionNotFoundException
from exception.SeatNotFoundException import SeatNotFoundException
from dto.SeatDTO import CreateSeatDTO, SeatDTO, UpdateSeatDTO
from repository.SeatRepository import repository
from service.SessionService import service as session_service
from mapper.SeatMapper import SeatMapper as mapper

class SeatService:
    async def get_all(self) -> list[SeatDTO]:
        seats = await repository.get_all()
        return [mapper.to_dto(dto_model=SeatDTO, orm_model=seat) for seat in seats]
    
    async def get_by_id(self, id: int) -> SeatDTO:
        seat = await repository.get_by_id(id)

        if not(seat):
            raise SeatNotFoundException()

        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
    async def create(self, dto: CreateSeatDTO) -> SeatDTO:
        session_id = dto.sessionId
        session = await session_service.get_by_id(session_id)

        if not(session):
            raise SessionNotFoundException()

        seat_dict = mapper.to_dict(dto)
        seat = await repository.create(seat_dict)
        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
    async def update(self, id: int, dto: UpdateSeatDTO) -> SeatDTO:
        session_id = dto.sessionId
        session = await session_service.get_by_id(session_id)
        seat = await repository.get_by_id(id)

        if not(seat):
            raise SeatNotFoundException()

        if not(session):
            raise SessionNotFoundException()

        seat_dict = mapper.to_dict(dto)
        seat = await repository.update(id, seat_dict)
        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
    async def delete(self, id: int) -> SeatDTO:
        seat = await repository.get_by_id(id)

        if not(seat):
            raise SeatNotFoundException()

        seat = await repository.delete(id)
        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
service = SeatService()