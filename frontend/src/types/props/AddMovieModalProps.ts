import { ImageType } from '../ImageType'
import { GenreType } from '../GenreType'

export interface AddMovieModalProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: (value: boolean) => void
  availableImages: ImageType[]
  availableGenres: GenreType[]
}
