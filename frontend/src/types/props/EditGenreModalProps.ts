import { Dispatch, SetStateAction } from "react"
import { GenreType } from "../GenreType"

export interface EditGenreModalProps {
    isEditModalOpen: boolean
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    selectedGenre: GenreType | null
}