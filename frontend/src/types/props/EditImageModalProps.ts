import { ImageType } from "../ImageType"

export interface EditImageModalProps {
    isEditModalOpen: boolean
    setIsEditModalOpen: (value: boolean) => void
    selectedImage: ImageType | null
}