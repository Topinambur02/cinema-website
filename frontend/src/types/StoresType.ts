import { GenreStore } from '../store/GenreStore'
import { HallStore } from '../store/HallStore'
import { ImageStore } from '../store/ImageStore'
import { MovieStore } from '../store/MovieStore'
import { SeatStore } from '../store/SeatStore'
import { SessionStore } from '../store/SessionStore'
import { UserStore } from '../store/UserStore'

export interface StoresType {
  movieStore: MovieStore
  imageStore: ImageStore
  genreStore: GenreStore
  sessionStore: SessionStore
  hallStore: HallStore
  seatStore: SeatStore
  userStore: UserStore
}
