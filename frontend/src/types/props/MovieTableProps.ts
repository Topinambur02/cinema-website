import { MovieType } from "../MovieType"

export interface MovieTableProps {
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedMovie: React.Dispatch<React.SetStateAction<MovieType | null>>
}