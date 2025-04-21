from DTO.SeatDTO import CreateSeatDTO
from exception.HallNotFoundException import HallNotFoundException
from DTO.HallDTO import CreateHallDTO, HallDTO, UpdateHallDTO
from repository.HallRepository import repository
from service.SeatService import service as seat_service
from mapper.HallMapper import HallMapper as mapper

class HallService:
    async def get_all(self) -> list[HallDTO]:
        halls = await repository.get_all()

        return [mapper.to_dto(dto_model=HallDTO, orm_model=hall) for hall in halls]
    
    async def get_by_id(self, id: int) -> HallDTO:
        hall = await repository.get_by_id(id)

        if not(hall) and not(None):
            raise HallNotFoundException()
        
        return mapper.to_dto(dto_model=HallDTO, orm_model=hall)
    
    async def create(self, dto: CreateHallDTO) -> HallDTO:
        capacity = dto.capacity
        hall_dict = mapper.to_dict(dto)
        created_hall = await repository.create(hall_dict)
        hall_id = created_hall.id

        for i in range(1, capacity + 1):
            seat_dto = CreateSeatDTO(seatNumber=i, hallId=hall_id)
            await seat_service.create(seat_dto)

        return mapper.to_dto(dto_model=HallDTO, orm_model=created_hall)
    
    async def update(self, id: int, dto: UpdateHallDTO) -> HallDTO:
        new_capacity = dto.capacity
        hall = await service.get_by_id(id)
        old_capacity = hall.capacity
        hall_dict = mapper.to_dict(dto)
        updated_hall = await repository.update(id, hall_dict)

        for i in range(old_capacity, new_capacity + 1):
            seat_dto = CreateSeatDTO(seatNumber=i, hallId=id)
            await seat_service.create(seat_dto)

        return mapper.to_dto(dto_model=HallDTO, orm_model=updated_hall)
    
    async def delete(self, id: int) -> HallDTO:
        await service.get_by_id(id)
        deleted_hall = await repository.delete(id)
        
        return mapper.to_dto(dto_model=HallDTO, orm_model=deleted_hall)
    
service = HallService()