import { Dispatch, SetStateAction } from 'react'
import { MovieType } from '../MovieType'

export interface MovieTableProps {
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  setSelectedMovie: Dispatch<SetStateAction<MovieType | null>>
}
