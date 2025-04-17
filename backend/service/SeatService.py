from exception.HallNotFoundException import HallNotFoundException
from exception.SeatNotFoundException import SeatNotFoundException
from dto.SeatDTO import CreateSeatDTO, SeatDTO, UpdateSeatDTO
from repository.SeatRepository import repository
from service.HallService import service as hall_service
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
        hall_id = dto.hallId

        if hall_id is not None and not await hall_service.get_by_id(hall_id):
            raise HallNotFoundException()

        seat_dict = mapper.to_dict(dto)
        seat = await repository.create(seat_dict)
        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
    async def update(self, id: int, dto: UpdateSeatDTO) -> SeatDTO:
        hall_id = dto.hallId
        hall = await hall_service.get_by_id(hall_id)
        seat = await repository.get_by_id(id)

        if not(seat):
            raise SeatNotFoundException()

        if not(hall):
            raise HallNotFoundException()

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