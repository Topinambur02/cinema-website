from DTO.HallDTO import UpdateHallDTO
from exception.HallNotFoundException import HallNotFoundException
from exception.SeatNotFoundException import SeatNotFoundException
from DTO.SeatDTO import CreateSeatDTO, SeatDTO, UpdateSeatDTO
from repository.SeatRepository import repository
from repository.HallRepository import repository as hall_repository
from mapper.SeatMapper import SeatMapper as mapper

class SeatService:
    async def get_all(self) -> list[SeatDTO]:
        seats = await repository.get_all()
        
        return [mapper.to_dto(dto_model=SeatDTO, orm_model=seat) for seat in seats]
    
    async def get_by_id(self, id: int) -> SeatDTO:
        seat = await repository.get_by_id(id)

        if not(seat) and not(None):
            raise SeatNotFoundException()
        
        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
    async def create(self, dto: CreateSeatDTO) -> SeatDTO:
        seat_dict = mapper.to_dict(dto)
        seat = await repository.create(seat_dict)
        hall_id = dto.hallId
        hall = await hall_repository.get_by_id(hall_id)

        if not(hall):
            raise HallNotFoundException()

        hall.capacity += 1
        hall_dto = mapper.to_dto(dto_model=UpdateHallDTO, orm_model=hall)
        hall_dict = mapper.to_dict(hall_dto)
        await hall_repository.update(hall_id, hall_dict)

        return mapper.to_dto(dto_model=SeatDTO, orm_model=seat)
    
    async def update(self, id: int, dto: UpdateSeatDTO) -> SeatDTO:
        seat = await service.get_by_id(id)
        seat_dict = mapper.to_dict(dto)
        updated_seat = await repository.update(id, seat_dict)

        return mapper.to_dto(dto_model=SeatDTO, orm_model=updated_seat)
    
    async def delete(self, id: int) -> SeatDTO:
        seat = await service.get_by_id(id)
        deleted_seat = await repository.delete(id)

        return mapper.to_dto(dto_model=SeatDTO, orm_model=deleted_seat)
    
service = SeatService()