import { HallType } from '../HallType'
import { MovieType } from '../MovieType'
import { SessionType } from '../SessionType'

export interface EditSessionModalProps {
  isEditModalOpen: boolean
  setIsEditModalOpen: (value: boolean) => void
  selectedSession: SessionType | null
  availableMovies: MovieType[]
  availableHalls: HallType[]
}
