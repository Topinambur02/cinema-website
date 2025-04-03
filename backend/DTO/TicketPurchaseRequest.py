from pydantic import BaseModel

class TicketPurchaseRequest(BaseModel):
    seatId: int
    