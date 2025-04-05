import { GenreStore } from '../store/GenreStore'
import { HallStore } from '../store/HallStore'
import { ImageStore } from '../store/ImageStore'
import { MovieStore } from '../store/MovieStore'
import { SessionStore } from '../store/SessionStore'

export interface StoresType {
  movieStore: MovieStore
  imageStore: ImageStore
  genreStore: GenreStore
  sessionStore: SessionStore
  hallStore: HallStore
}
