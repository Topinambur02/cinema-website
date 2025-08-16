import { Dispatch, SetStateAction } from 'react'
import { HallType } from '../HallType'
import { MovieType } from '../MovieType'

export interface AddSessionModalProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  availableHalls: HallType[]
  availableMovies: MovieType[]
}
