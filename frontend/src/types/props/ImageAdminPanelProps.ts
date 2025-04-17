import { Dispatch, SetStateAction } from 'react'
import { ImageType } from '../ImageType'

export interface ImageAdminPanelProps {
  isAddModalOpen: boolean
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
  isEditModalOpen: boolean
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  selectedImage: ImageType | null
  setSelectedImage: Dispatch<SetStateAction<ImageType | null>>
}
