from typing import List
from model.Booking import Booking
from model.User import User
from exception.BookingNotFoundException import BookingNotFoundException
from dto.BookingDTO import BookingDTO, CreateBookingDTO, UpdateBookingDTO
from repository.BookingRepository import repository
from service.SeatService import service as seat_service
from mapper.BookingMapper import BookingMapper as mapper

class BookingService:
    async def get_all(self) -> list[BookingDTO]:
        all_booking = await repository.get_all()

        return [mapper.to_dto(dto_model=BookingDTO, orm_model=booking) for booking in all_booking]
    
    async def get_by_id(self, id: int) -> BookingDTO:
        booking = await repository.get_by_id(id)

        if not(booking):
            raise BookingNotFoundException()

        return mapper.to_dto(dto_model=BookingDTO, orm_model=booking)
    
    async def get_tickets_sold(self) -> list[tuple[str, int]]:
        return await repository.get_tickets_sold()
    
    async def create(self, dtos: List[CreateBookingDTO], user: User) -> List[CreateBookingDTO]:
        seat_ids = [dto.seatId for dto in dtos]
        created_bookings = []

        for seat_id in seat_ids:
            await seat_service.get_by_id(seat_id)
    
        booking_dicts = [
            {**dto.model_dump(), "userId": user.id}
            for dto in dtos
        ]
    
        for booking_dict in booking_dicts:
            created_booking = await repository.create(booking_dict)
            created_bookings.append(created_booking)
    
        return [mapper.to_dto(dto_model=BookingDTO, orm_model=booking) for booking in created_bookings]
    
    async def update(self, id: int, dto: UpdateBookingDTO, user: User) -> BookingDTO:
        seat_id = dto.seatId
        user_id = user.id
        await seat_service.get_by_id(seat_id)
        booking_dict = mapper.to_dict(dto)
        booking_dict['userId'] = user_id
        updated_booking = await repository.update(id, booking_dict)

        return mapper.to_dto(dto_model=BookingDTO, orm_model=updated_booking)
    
    async def delete(self, id: int) -> BookingDTO:
        await repository.get_by_id(id)
        deleted_booking = await repository.delete(id)

        return mapper.to_dto(dto_model=BookingDTO, orm_model=deleted_booking)
    
    async def purchase_tickets(self, id, user: User) -> BookingDTO:
        booking = await repository.get_by_id(id)
        booking.userId = user.id
        updated_booking = await repository.update(id, booking)

        return mapper.to_dto(dto_model=BookingDTO, orm_model=updated_booking)
    
service = BookingService()