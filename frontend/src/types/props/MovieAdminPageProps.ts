import { Dispatch, SetStateAction } from 'react'
import { GenreType } from '../GenreType'
import { ImageType } from '../ImageType'
import { MovieType } from '../MovieType'

export interface MovieAdminPageProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  isEditModalOpen: boolean
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  selectedMovie: MovieType | null
  setSelectedMovie: Dispatch<SetStateAction<MovieType | null>>
  images: ImageType[]
  genres: GenreType[]
}
