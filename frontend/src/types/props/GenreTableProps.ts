import { Dispatch, SetStateAction } from "react"
import { GenreType } from "../GenreType"

export interface GenreTableProps {
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    setSelectedGenre: Dispatch<SetStateAction<GenreType | null>>
}