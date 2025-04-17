import { Dispatch, SetStateAction } from "react"
import { ImageType } from "../ImageType"

export interface ImageTableProps {
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    setSelectedImage: Dispatch<SetStateAction<ImageType | null>>
}