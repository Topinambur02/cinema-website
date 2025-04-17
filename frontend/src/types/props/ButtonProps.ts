import { Dispatch, SetStateAction } from 'react'
import { MovieType } from '../MovieType'

export interface ButtonsProps {
  record: MovieType
  setSelectedMovie: Dispatch<SetStateAction<MovieType | null>>
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
}
