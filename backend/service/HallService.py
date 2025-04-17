from exception.HallNotFoundException import HallNotFoundException
from dto.HallDTO import CreateHallDTO, HallDTO, UpdateHallDTO
from repository.HallRepository import repository
from repository.SeatRepository import repository as seat_repository
from mapper.HallMapper import HallMapper as mapper

class HallService:
    async def get_all(self) -> list[HallDTO]:
        halls = await repository.get_all()

        return [mapper.to_dto(dto_model=HallDTO, orm_model=hall) for hall in halls]
    
    async def get_by_id(self, id: int) -> HallDTO:
        hall = await repository.get_by_id(id)

        if not(hall):
            raise HallNotFoundException()
        
        return mapper.to_dto(dto_model=HallDTO, orm_model=hall)
    
    async def create(self, dto: CreateHallDTO) -> HallDTO:
        capacity = dto.capacity

        hall_dict = mapper.to_dict(dto)
        created_hall = await repository.create(hall_dict)

        for i in range(1, capacity + 1):
            seat_dict = {
                'seatNumber': i,
                'hallId': created_hall.id
            }
            await seat_repository.create(seat_dict)

        return mapper.to_dto(dto_model=HallDTO, orm_model=created_hall)
    
    async def update(self, id: int, dto: UpdateHallDTO) -> HallDTO:
        hall = await repository.get_by_id(id)

        if not(hall):
            raise HallNotFoundException()
        
        hall_dict = mapper.to_dict(dto)
        updated_hall = await repository.update(id, hall_dict)

        return mapper.to_dto(dto_model=HallDTO, orm_model=updated_hall)
    
    async def delete(self, id: int) -> HallDTO:
        hall = await repository.get_by_id(id)

        if not(hall):
            raise HallNotFoundException()

        deleted_hall = await repository.delete(id)
        
        return mapper.to_dto(dto_model=HallDTO, orm_model=deleted_hall)
    
service = HallService()