from dto.SeatDTO import UpdateSeatDTO
from exception.SeatAlreadyBookedException import SeatAlreadyBookedException
from model.User import User
from dto.TicketPurchaseRequest import TicketPurchaseRequest
from service.SeatService import service as seat_service
from mapper.SeatMapper import SeatMapper as seat_mapper

class UserService:
    async def purchase_ticket(self, request: TicketPurchaseRequest, user: User):
        seatIds = request.seatIds
        seats = []

        for seatId in seatIds:
            seat = await seat_service.get_by_id(seatId)

            if seat.isBooked:
                raise SeatAlreadyBookedException()

            seat_dict = seat_mapper.to_dict(seat)
            seat_dict["userId"] = user.id
            seat_dict["isBooked"] = True
            updated_dto = UpdateSeatDTO(**seat_dict)
            updated_seat = await seat_service.update(seatId, updated_dto)
            seats.append(updated_seat)

        return seats

service = UserService()
