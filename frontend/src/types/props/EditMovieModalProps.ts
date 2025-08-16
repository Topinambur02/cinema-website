import { GenreType } from '../GenreType'
import { ImageType } from '../ImageType'
import { MovieType } from '../MovieType'

export interface EditMovieModalProps {
  isEditModalOpen: boolean
  setIsEditModalOpen: (value: boolean) => void
  selectedMovie: MovieType | null
  availableImages: ImageType[]
  availableGenres: GenreType[]
}
