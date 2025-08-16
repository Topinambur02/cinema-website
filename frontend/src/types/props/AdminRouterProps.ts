import { GenreType } from '../GenreType'
import { HallType } from '../HallType'
import { ImageType } from '../ImageType'
import { MovieType } from '../MovieType'
import { SeatType } from '../SeatType'
import { SessionType } from '../SessionType'

export interface AdminRouterProps {
  selectedKey: string
  images: ImageType[]
  genres: GenreType[]
  movies: MovieType[]
  halls: HallType[]
  sessions: SessionType[]
  seats: SeatType[]
}
