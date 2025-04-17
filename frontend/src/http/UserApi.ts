import $host from '.'
import { SeatType } from '../types/SeatType'
import { TicketPurchaseRequestType } from '../types/TicketPurchaseRequestType'

class UserApi {
  static async purchaseTickets(request: TicketPurchaseRequestType): Promise<SeatType[]> {
    const { data } = await $host.post<SeatType[]>('/user/tickets', request)
    return data
  }
}

export default UserApi
