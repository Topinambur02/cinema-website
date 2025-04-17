import { Dispatch, SetStateAction } from 'react'

export interface AddGenreModalProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
}
