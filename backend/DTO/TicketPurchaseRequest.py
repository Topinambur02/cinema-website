from pydantic import BaseModel

class TicketPurchaseRequest(BaseModel):
    seatIds: list[int]
    