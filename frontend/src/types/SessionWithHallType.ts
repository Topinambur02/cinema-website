import { HallType } from './HallType'

export type SessionWithHallType = {
  id: number
  startTime: string
  endTime: string
  movieId: number
  hallId: number
  hall: HallType | null
}
