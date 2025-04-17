import { Dispatch, SetStateAction } from 'react'
import { GenreType } from '../GenreType'

export interface GenreAdminPanelProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  isEditModalOpen: boolean
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  selectedGenre: GenreType | null
  setSelectedGenre: Dispatch<SetStateAction<GenreType | null>>
}
